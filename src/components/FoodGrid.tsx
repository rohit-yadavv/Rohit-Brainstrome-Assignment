import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsByArea } from "../store/mealsSlice";
import type { RootState } from "../types";
import FoodCard from "./FoodCard";
import { Button } from "./ui/button";

const ITEMS_PER_PAGE = 8;

const FoodGrid: React.FC = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: RootState) => state.meals);
  const { selectedArea, sortOrder } = useSelector(
    (state: RootState) => state.filter
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // @ts-expect-error - TODO
    dispatch(fetchMealsByArea(selectedArea));
    setCurrentPage(1);
  }, [selectedArea, dispatch]);

  const sortedItems = [...items].sort((a, b) => {
    if (!sortOrder) return 0;
    return sortOrder === "asc"
      ? a.strMeal.localeCompare(b.strMeal)
      : b.strMeal.localeCompare(a.strMeal);
  });

  const totalPages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);
  const currentItems = sortedItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {currentItems.map((meal) => (
          <FoodCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default FoodGrid;
