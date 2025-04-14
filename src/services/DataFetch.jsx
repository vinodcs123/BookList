import { from } from "rxjs"

const DataFetch=()=>{
    return from(fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
            .then(res=>{
                     if(!res.ok)
                         throw new Error(res.statusText);
                          return res.json();
                         }))
}
export default DataFetch;