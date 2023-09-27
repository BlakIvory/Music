import actionTypes from "../actions/ActionTypes";

const initState = { 
    banner :[],
    hot:[],
}

const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner : action.homeData?.find (item => item.sectionId === 'hSlider')||null,
                hot :    action.homeData?.find (item => item.sectionId === 'hEditorTheme')||{},
                
            };
        default:
            return state;
    }
}

export default AppReducer