import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hashCode = (s: string) => {
  let h = 0,
    i = 0;
  const l = s.length;
  if (l > 0) while (i < l) h = ((h << 5) - h + s.charCodeAt(i++)) | 0;
  return h;
};


export function findFoodBg(key: string) {
  const availableColors: string[] = [
    'bg-food-background-color-1',
    'bg-food-background-color-2',
    'bg-food-background-color-3',
    'bg-food-background-color-4',
    'bg-food-background-color-5',
  ];
  const hashedCardBg = hashCode(key);
  const color =
    availableColors[((hashedCardBg % availableColors.length) + availableColors.length) % availableColors.length];
  return color;
}

export function findTagColor(key: string) {
  const availableColors: string[] = [
    'text-food-text-color-1',
    'text-food-text-color-2',
    'text-food-text-color-3',
    'text-food-text-color-4',
    'text-food-text-color-5',
  ];
  const hashedCardBg = hashCode(key);
  const color =
    availableColors[((hashedCardBg % availableColors.length) + availableColors.length) % availableColors.length];
  return color;
}

export const capitalizeFirstLetterOfFirstTwoWord = (str: string): string => {
  return str
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};