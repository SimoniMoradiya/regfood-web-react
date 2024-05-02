import React, { useReducer , useEffect } from "react";
import { useContext } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading : true,
    query : "html",
    nbPages: 0,
    page: 0,
    hits : [],
}

// context creation
const AppContext = React.createContext();

    // to create a provider function

const AppProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer, initialState);


    const fetchApiData = async (url) => {

        dispatch({type:"SET_LOADING"})

        try {
            const res = await fetch(url);

            const data = await res.json();

            console.log(data);

            dispatch({
                type:"GET_MENU",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })

            // isLodding = false ;
        } 
        catch(error){
            console.log(error);
        }
    }

    useEffect (() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, []);


    return(
        <>
        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
        </>
    );
};


// custom hook create

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};

