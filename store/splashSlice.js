import { createSlice } from '@reduxjs/toolkit';

const splashSlice = createSlice({
    name: 'splash',
    initialState: {
        showSplash: true,
    },
    reducers: {
        hideSplash: (state) => {
            state.showSplash = false;
        },
    },
});

export const { hideSplash } = splashSlice.actions;
export default splashSlice.reducer;
