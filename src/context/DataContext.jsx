import { createContext, useEffect, useState } from "react";

import DataFetch from "../services/DataFetch"; 
import { Subscription } from "rxjs";


// eslint-disable-next-line react-refresh/only-export-components
export const DataContext=createContext();



export const DataProvider=({children})=>{
  const[data, setData]=useState([]);
  const [error, setError] = useState(null);
  const[query, setQuery]=useState('');
  const[debouncedInput, setDebouncedInput]=useState('')

  useEffect(()=>{
    let value=query;
    const timer=setTimeout(()=>{
       setDebouncedInput(value)
    },500)
    return ()=>clearTimeout(timer)
  },[query])

  const filteredData = data.filter(book => 
    book.volumeInfo.title.toLowerCase().includes(debouncedInput.toLowerCase())
  );
  useEffect(() => {
    const subscription = new Subscription();
    const observable = DataFetch();

    subscription.add(
      observable.subscribe({
        next: data => setData(data.items || []),
        error: err => setError(err.message)
      })
    );

    return () => subscription.unsubscribe();
  }, []);
    return(
        <DataContext.Provider  value={{ data, filteredData ,error , setQuery, query}}>
            {children}
        </DataContext.Provider>
    )
}