import { createSlice } from "@reduxjs/toolkit";

export const ReduxStoreList = {
  mainPage: "mainpage",
};



const mainPageSlice = createSlice({
  name: ReduxStoreList.mainPage,
  initialState: {
    bannertitle: "",
    welcometitle: "",
    welcometitle1: "",
    welcometitle2: "",
    welcomedes1: "",
    welcomedes2: "des 22",
    chooseustitle: "",
    chooseuspoints: [],
    testimonialstitle: "",
    testimonialspoints: {},
  },
  reducers: {
    setMainPageContent: (state, action) => {
      console.log('state change activated');

      for (const [key, value] of Object.entries(action.payload)) {
        console.log('key,value: ' + key + value);
        console.log('state[key]:  ' + state[key]);
        state[key] = value;
      }
    }
  }
});


export const { setMainPageContent } = mainPageSlice.actions
export default mainPageSlice.reducer;
