import * as apis from '../../apis'
import ActionTypes from './ActionTypes'
export const getHome = () => async (dispatch) => {
    try {
        const response = await apis.getHome()

        if(response?.data.err===0){
            //when true
            dispatch({
                type : ActionTypes.GET_HOME,
                homeData : response.data.data.items
            })
        }else{
            //false
            dispatch({
                type : ActionTypes.GET_HOME,
                homeData : null
            })
        }
    } catch (error) {
        dispatch({
            type : ActionTypes.GET_HOME,
            homeData : null
        })
    }
}