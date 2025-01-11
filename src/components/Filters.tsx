import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ArrowUpDown, Check, ChevronsUpDown, Search } from "lucide-react";
import { setSelectedArea, setSortOrder } from "../store/filterSlice";
import type { RootState, Area } from "../types";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "../lib/utils";
const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const [areas, setAreas] = useState<Area[]>([]);
  const { selectedArea, sortOrder } = useSelector(
    (state: RootState) => state.filter
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        setAreas(response.data.meals);
      } catch (error) {
        console.error("Failed to fetch areas:", error);
      }
    };
    fetchAreas();
  }, []);

  const handleSortToggle = () => {
    dispatch(
      setSortOrder(
        sortOrder === "asc" ? "desc" : sortOrder === "desc" ? null : "asc"
      )
    );
  };

  return (
    <div className="flex flex-col mx-auto p-4 gap-4">
      <div className="sm:hidden flex grow max-w-xl ">
        <div className="relative flex grow">
          <input
            type="text"
            placeholder="Search for food..."
            className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      <div className="flex grow flex-wrap gap-4 items-center max-sm:justify-between">
        {/* Filter by Area using Combobox */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {selectedArea || "Filter by Area..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search area..." className="h-9" />
              <CommandList>
                <CommandEmpty>No areas found.</CommandEmpty>
                <CommandGroup>
                  {areas.map((area) => (
                    <CommandItem
                      key={area.strArea}
                      value={area.strArea}
                      onSelect={(currentValue) => {
                        dispatch(setSelectedArea(currentValue));
                        setOpen(false);
                      }}
                    >
                      {area.strArea}
                      <Check
                        className={cn(
                          "ml-auto",
                          selectedArea === area.strArea
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Sort Toggle */}
        <Button
          variant={sortOrder ? "default" : "outline"}
          onClick={handleSortToggle}
          className="flex items-center gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          Sort
          {sortOrder === "asc" ? "(A-Z)" : sortOrder === "desc" ? "(Z-A)" : ""}
        </Button>
      </div>
    </div>
  );
};

export default Filters;
