import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = 'a7f7ec27e86078ebf';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    

    useEffect(() => {
        //effect
        const fetchData = async() => {
            fetch(
                // GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
                // `https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}:omuauf_lfve&q=${term}`
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                // `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}:omuauf_lfve&q=cars&callback=${term}`
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
    
};

export default useGoogleSearch
