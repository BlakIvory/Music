import actionTypes from "../actions/ActionTypes";

const initState = { 
    banner :[],
    hot: {},
    
    top100: {},
}

const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
              ...state,
              banner:
                action.homeData?.find((item) => item.sectionId === "hSlider") ||
                null,
              hot:
                action.homeData?.find(
                  (item) => item.sectionId === "hEditorTheme"
                ) || {},
              top100:
                action.homeData?.find(
                  (item) => item.sectionId === "h100"
                ) || {},
            };
        default:
            return state;
    }
}

export default AppReducer