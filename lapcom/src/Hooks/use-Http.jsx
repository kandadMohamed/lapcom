import { useReducer, useCallback } from "react";

export const ACTIONS = {
    SENDING : 'sending',
    ERROR   : 'error',
    SUCCESS : 'success'
}
const httpReducer = (state,action) =>{

    if( action.type === ACTIONS.SENDING ){
        return{
            data: null,
            status: ACTIONS.SENDING,
            error : null
        }
    }

    if( action.type === ACTIONS.SUCCESS ){
        return{
            data: action.data,
            status: ACTIONS.SUCCESS,
            error : null
        }
    }

    if( action.type === ACTIONS.ERROR ){
        return{
            data: null,
            status: ACTIONS.ERROR,
            error : action.error
        }
    }

    return state;
}

const useHttp = (requestFunc, isPending = false) =>{
    const initialHttp = {
        data: null,
        status: isPending ? 'pending' : null,
        error: null
    }
    const [ httpR, dispatch ] = useReducer(httpReducer,initialHttp);

    const sendRequest = useCallback(
        async function(requestData){
            try{
                dispatch({ type: ACTIONS.SENDING })
                const response = await requestFunc(requestData);
                
                dispatch({ 
                    type: ACTIONS.SUCCESS, 
                    data: response
                })
            }catch(e){
                dispatch({ 
                    type: ACTIONS.ERROR, 
                    error: e.message || 'Something Wrong!'
                })
            }
        }
    ,[requestFunc])

    return {
        sendRequest,
        ...httpR
    }
}

export default useHttp;