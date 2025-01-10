import { findFoodBg, findTagColor, capitalizeFirstLetterOfFirstTwoWord } from '../lib/utils';

describe('findFoodBg', () => {
  it('should return a valid background color based on input string', () => {
    expect(findFoodBg('Pizza')).toMatch(/^bg-food-background-color-\d$/);
  });
});

describe('findTagColor', () => {
  it('should return a valid tag color based on input string', () => {
    expect(findTagColor('Pizza')).toMatch(/^text-food-text-color-\d$/);
  });
});

describe('capitalizeFirstLetterOfFirstTwoWord', () => {
  it('should capitalize first two words', () => {
    expect(capitalizeFirstLetterOfFirstTwoWord('hello world')).toBe('HW');
  });
});
