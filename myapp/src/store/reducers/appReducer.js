import actionTypes from "../actions/ActionTypes";

const initState = { 
    banner :[],
}

const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner : action.homeData?.find (item => item.sectionType === 'banner')||null
            };
    
        default:
            return state;
    }
}

export default AppReducer