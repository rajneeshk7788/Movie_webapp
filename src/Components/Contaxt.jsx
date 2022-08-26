import React, { useContext, useEffect, useState } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContaxt = React.createContext();


const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show:"false", msg:"" })
    const [query, setQuery]=useState("Titanic")

    const getMovies = async (url) => {
        setLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setLoading(false)
                setIsError({
                    show: false,
                    msg: ""
                })
                setMovie(data.Search)
            } else {
                setIsError({
                    show: true,
                    msg: data.Error
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        let timerOut = setTimeout(() => {            
            getMovies(`${API_URL}&s=${query}`)
        }, 500);
        return ()=> clearTimeout(timerOut)
    }, [query])


    return <AppContaxt.Provider value={{ loading, movie, isError, query, setQuery  }}>
        {children}
    </AppContaxt.Provider>
};

const useGlobalContaxt = () => {
    return useContext(AppContaxt)
}


export { AppContaxt, AppProvider, useGlobalContaxt }
