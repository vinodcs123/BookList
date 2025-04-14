import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import BookCard from './BookCard';

import '../styles/BookList.css'
import { Link } from 'react-router-dom';

const BookList = () => {
    const{data, filteredData}=useContext(DataContext)

   const [loading, setLoading]=useState(true)
   
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) return <p className='loading'>Loading books, please wait...</p>

  
  return (
    <div className='books'>
        <Link to="/books" className='allbooks'><h4>All Books</h4></Link>
      <div  className="book-grid">  {filteredData.map((item, i)=><BookCard key={i} book={item} />)}</div>
    
    </div>
  )
}

export default BookList;
