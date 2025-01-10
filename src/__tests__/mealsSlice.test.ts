import mealsReducer, { fetchMealsByArea } from '../store/mealsSlice';
import axios from 'axios';

jest.mock('axios');

describe('mealsSlice', () => {
  it('should return initial state', () => {
    expect(mealsReducer(undefined, { type: undefined })).toEqual({
      items: [],
      loading: false,
      error: null,
    });
  });

  it('should handle fetchMealsByArea fulfilled', async () => {
    axios.get.mockResolvedValueOnce({ data: { meals: [{ idMeal: '1', strMeal: 'Pizza' }] } });
    const action = await fetchMealsByArea.fulfilled([{ idMeal: '1', strMeal: 'Pizza' }], '', 'Indian');
    const state = mealsReducer(undefined, action);
    expect(state.items.length).toBe(1);
    expect(state.items[0].strMeal).toBe('Pizza');
  });

  it('should handle fetchMealsByArea rejected', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));
    const action = await fetchMealsByArea.rejected({ error: 'Network Error' });
    const state = mealsReducer(undefined, action);
    expect(state.error).toBe('Network Error');
  });
});
