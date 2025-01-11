import * as React from "react";
import { Search, Menu } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-primary">Food Menu</h1>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost">Sign In</Button>
          <Button>Cart</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
