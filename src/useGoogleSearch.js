import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "9c02f919021fa6113";

const useGoogleSearch = (term) => {
    const [data, setData] = useState[null];

    useEffect(() => {
        //effect
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(
                response => response.json()
            )
            .then(
                result => {
                    setData(result)
                }
            )
        }

        fetchData();
        /*
        return () => {
            cleanup
        }
        */
    }, [term])

    return {  data }
    
}

export default useGoogleSearch
