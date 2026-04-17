import axios from "axios";
import { API_KEY } from "../core/constants";
import { useEffect, useState } from "react";

export const useGetData = <T,>(url: string, params: Record<string, any>, deps: any[]) => {
    const [data, setData] = useState<T | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<T>(url, 
                    { params: { api_key: API_KEY } , ...params}
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, deps);
    return data;
}