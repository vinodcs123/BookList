import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
  const { title, authors = [], publisher = "Unknown", publishedDate = "N/A" } = book.volumeInfo;

  return (
    <article className='book-card'>
      <header className='book-card__header'>
        <h2>{title}</h2>
      </header>
      <section className='book-card__details'>
        <p><strong>Authors:</strong> {authors.length ? authors.join(', ') : 'Unknown'}</p>
        <p><strong>Publisher:</strong> {publisher}</p>
        <p><strong>Published Date:</strong> {publishedDate}</p>
      </section>
    </article>
  );
};

export default BookCard;
