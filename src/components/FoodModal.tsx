import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Meal, MealDetail } from "../types";
import { DialogHeader } from "./ui/dialog";
import { Typography } from "./ui/typography";
import {
  capitalizeFirstLetterOfFirstTwoWord,
  cn,
  findFoodBg,
  findTagColor,
} from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

interface FoodModalProps {
  meal: Meal;
}

const FoodModal: React.FC<FoodModalProps> = ({ meal }) => {
  const [mealDetails, setMealDetails] = useState<MealDetail>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      );
      setMealDetails(response.data.meals[0]);
      setLoading(false);
    };
    fetchDetails();
  }, [meal.idMeal]);

  return (
    <>
      <DialogHeader
        className={cn(
          "rounded-lg p-5 dark:bg-gray-700",
          findFoodBg(meal.strMeal)
        )}
      >
        <div className="flex flex-row items-center gap-3 pt-5">
          <Avatar className="size-20 sm:size-24">
            <AvatarImage src={meal.strMealThumb} />
            <AvatarFallback>
              {capitalizeFirstLetterOfFirstTwoWord(meal.strMeal)}
            </AvatarFallback>
          </Avatar>
          <div>
            {loading ? (
              <Skeleton className="w-full h-20" />
            ) : (
              <Typography variant="h3" className="text-start ">
                {meal.strMeal}
              </Typography>
            )}
            {mealDetails?.strTags && !loading && (
              <div className="flex flex-wrap gap-2">
                {mealDetails.strTags.split(",").map((tag, index) => (
                  <Typography
                    key={index}
                    variant="smallText"
                    className={cn(findTagColor(tag))}
                  >
                    #{tag.trim()}
                  </Typography>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogHeader>
      <div className="p-5 pt-0">
        <div className="flex flex-col">
          {/* Meal Category and Area */}
          <div className="flex flex-row justify-between py-4">
            {loading ? (
              <Skeleton className="h-20 w-full" />
            ) : (
              <>
                <Typography
                  variant="smallText"
                  className="font-semibold text-black"
                >
                  Category:
                  <span className="font-normal">
                    {mealDetails?.strCategory}
                  </span>
                </Typography>
                <Typography
                  variant="smallText"
                  className="font-semibold text-black"
                >
                  Area:
                  <span className="font-normal"> {mealDetails?.strArea}</span>
                </Typography>
              </>
            )}
          </div>

          {/* Ingredients */}
          <Typography
            variant="smallText"
            className="font-semibold py-4 text-black"
          >
            Ingredients:
          </Typography>
          <div className="flex flex-col max-h-28 overflow-y-auto">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full mb-2" />
                ))
              : Array.from({ length: 20 }, (_, i) => i + 1)
                  .map((num) => ({
                    // @ts-expect-error - TS complains
                    ingredient: mealDetails?.[`strIngredient${num}`],
                    // @ts-expect-error - TS complains
                    measure: mealDetails?.[`strMeasure${num}`],
                  }))
                  .filter((item) => item.ingredient)
                  .map((item, index) => (
                    <Typography key={index} variant="smallText">
                      {item.measure} {item.ingredient}
                    </Typography>
                  ))}
          </div>

          <Typography
            variant="smallText"
            className="font-semibold py-4 text-black"
          >
            Instructions:
          </Typography>
          <div className="max-h-28 overflow-y-auto">
            {loading ? (
              <Skeleton className="w-full h-16" />
            ) : (
              mealDetails?.strInstructions
                .split("\n")
                .map((line: string, index: number) => (
                  <Typography
                    key={index}
                    variant="smallText"
                    className="flex flex-col gap-1"
                  >
                    {line.trim()}
                  </Typography>
                ))
            )}
          </div>

          {/* Video Tutorial */}
          {mealDetails?.strYoutube && !loading && (
            <div className="flex gap-4 items-center px-2 py-4">
              <Typography
                variant="smallText"
                className="font-semibold  text-black "
              >
                Video Tutorial:
              </Typography>
              <a
                href={mealDetails.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline "
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodModal;
