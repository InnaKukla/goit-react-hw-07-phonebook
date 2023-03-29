import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer, filtersReducer } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
