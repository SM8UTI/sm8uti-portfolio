import { configureStore } from "@reduxjs/toolkit";

import mainslice from "./slices/mainslice";
const store = configureStore({
  reducer: {
    main: mainslice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
