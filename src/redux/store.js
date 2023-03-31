import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './sliceContacts';
import { filtersReducer } from './sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
