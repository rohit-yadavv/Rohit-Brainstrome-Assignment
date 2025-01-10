import filterReducer, { setSelectedArea, setSortOrder } from '../store/filterSlice';

describe('filterSlice', () => {
  it('should handle setSelectedArea', () => {
    const action = setSelectedArea('Italian');
    const state = filterReducer(undefined, action);
    expect(state.selectedArea).toBe('Italian');
  });

  it('should handle setSortOrder', () => {
    const action = setSortOrder('asc');
    const state = filterReducer(undefined, action);
    expect(state.sortOrder).toBe('asc');
  });
});
