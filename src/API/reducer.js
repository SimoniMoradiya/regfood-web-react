import React from "react";

const reducer = (state, action) => {

    switch (action.type) {

        case "SET_LOADING" : 
            return {
                ...state,
                isLoading:true,
            }

        case "GET_MENU" :
            return {
                ...state,
                isLoading:false,
                hits : action.payload.hits,
                nbPages : action.payload.nbPages,
            }
    }

    return state;
}

export default reducer;