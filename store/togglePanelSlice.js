const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    mainMenuToggle: false,
}


const togglePanelsSlice = createSlice({
    name: "togglePanels",
    initialState,
    reducers: {
        toggleMainMenu: (state) => {
            state.mainMenuToggle = !state.mainMenuToggle;
        }
    }
})


export const { toggleMainMenu } = togglePanelsSlice.actions;
export default togglePanelsSlice.reducer;