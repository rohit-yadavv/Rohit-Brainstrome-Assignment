import { capitalizeFirstLetterOfFirstTwoWord, findFoodBg, findTagColor } from '../../lib/utils';

describe('Utility Functions', () => {
  test('capitalizeFirstLetterOfFirstTwoWord returns correct initials', () => {
    expect(capitalizeFirstLetterOfFirstTwoWord('chicken biryani')).toBe('CB');
    expect(capitalizeFirstLetterOfFirstTwoWord('pizza')).toBe('P');
  });

  test('findFoodBg returns valid background class', () => {
    const bgClass = findFoodBg('Test Food');
    expect(bgClass).toMatch(/^bg-food-background-color-[1-5]$/);
  });

  test('findTagColor returns valid text color class', () => {
    const textClass = findTagColor('Test Tag');
    expect(textClass).toMatch(/^text-food-text-color-[1-5]$/);
  });
});