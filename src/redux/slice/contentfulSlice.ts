import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contentful } from "../../interfaces/type";
import fetchDataContentful from "../fetch/fetchContentful";

const defaultInitialState: Contentful = {
  data: [],
  error: null,
  loading: false
};

const loadStateFromLocalStorage = (): Contentful => {
  try {
    const serializedState = localStorage.getItem('contentfulState');
    if (serializedState === null) {
      return defaultInitialState;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return defaultInitialState;
  }
};

const initialState: Contentful = loadStateFromLocalStorage();

const saveStateToLocalStorage = (state: Contentful) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contentfulState', serializedState);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

const contentfulSlice = createSlice({
  name: 'contentful',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any[] | null>) { 
      state.data = action.payload;
      state.loading = false;
      state.error = null;
      saveStateToLocalStorage(state);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      state.error = null;
      saveStateToLocalStorage(state);
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
      saveStateToLocalStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchDataContentful.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchDataContentful.fulfilled, (state, action:PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchDataContentful.rejected, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.error =  action.payload
    });
},
});

export default contentfulSlice.reducer;