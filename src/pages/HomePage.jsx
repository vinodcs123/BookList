import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import BookList from '../components/BookList'

const HomePage = () => {
  return (
    <div>
       <Header />
        <SearchBar/>
        <BookList/>
    </div>
  )
}

export default HomePage
