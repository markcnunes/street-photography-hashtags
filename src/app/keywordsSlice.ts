import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import categoriesDefaultData, {
  ICategory,
  ILocation,
  locationsData,
} from 'api/data';

interface KeywordsState {
  all: ICategory;
  categories: ICategory[];
  locations: ILocation[];
}

const keywordsInitialState: KeywordsState = {
  all: {
    category: 'all',
    icon: 'GiBallPyramid',
    keywords: categoriesDefaultData.map((category) => category.keywords).flat(),
  },
  categories: categoriesDefaultData,
  locations: locationsData,
};

const keywords = createSlice({
  name: 'keywords',
  initialState: keywordsInitialState,
  reducers: {
    // Update which categories should be displayed on the category "All"
    updateHiddenCategories(state, { payload }: PayloadAction<string[]>) {
      const removeList = payload;

      const withoutHidenCategories = categoriesDefaultData
        .filter(
          (category) => !removeList.some((item) => item === category.category),
        )
        .map((category) => category.keywords)
        .flat();

      state.all.keywords = withoutHidenCategories;
    },
  },
});

export const { updateHiddenCategories } = keywords.actions;

export default keywords.reducer;
