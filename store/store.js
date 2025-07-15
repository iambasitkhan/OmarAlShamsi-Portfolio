import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./togglePanelSlice"
import splashReducer from "./splashSlice"

export const store = configureStore({
    reducer: {
        togglePanels: toggleReducer,
        splash: splashReducer,
    }
})