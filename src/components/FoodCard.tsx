import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import FoodModal from "./FoodModal";
import { cn, findFoodBg } from "../lib/utils";
import { Typography } from "./ui/typography";
import { Meal } from "../types";

type FoodCardProps = {
  meal: Meal;
};

const FoodCard: React.FC<FoodCardProps> = ({ meal }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={cn(
            "rounded-lg shadow-md dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
            findFoodBg(meal.strMeal)
          )}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-52 object-cover"
          />
          <div className="p-4 ">
            <Typography variant="h5">{meal.strMeal}</Typography>
            {meal.strCategory && (
              <p className="text-sm text-gray-600">
                Category: {meal.strCategory}
              </p>
            )}
            {meal.strArea && (
              <p className="text-sm text-gray-600">Area: {meal.strArea}</p>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 min-w-52">
        <FoodModal meal={meal} />
      </DialogContent>
    </Dialog>
  );
};

export default FoodCard;
