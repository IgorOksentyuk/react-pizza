import { RootState } from '../redux/store';

export const selectorSort = (state: RootState) => state.filter.sort;
