import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useApi = (request) => {
    const [response, setResponse] = useState({
        data: null,
        pending: false,
        completed: false,
        error: false,
    });

    useEffect(() => {
        setResponse({
            data: null,
            pending: true,
            completed: false,
            error: false,
        });
        axios(request)
            .then(res => setResponse({
                data: res.data,
                pending: false,
                error: false,
                complete: true,
            }))
            .catch(() => setResponse({
                data: null,
                pending: false,
                error: true,
                complete: true,
            }));
    }, [req.url]);

    return response;
}

export default useApi;


