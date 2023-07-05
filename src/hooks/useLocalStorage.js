import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        }catch(error){
            console.log(error);
            return defaultValue;
        }
    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key,value])
      
      
      return [value, setValue];
};

export default useLocalStorage;