import { useState, useEffect } from "react";

// 커스텀훅 만들기
const useFetch = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
        } catch (error) {
            console.error('useFetch error', error);
        }
    }, [url]);

    return [data];
}

export default useFetch;