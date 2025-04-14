
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import BookList from './BookList';

const renderWithContext = (contextValue) => {
  return render(
    <DataContext.Provider value={contextValue}>
      <BrowserRouter>
        <BookList />
      </BrowserRouter>
    </DataContext.Provider>
  );
};


describe('BookList Component', () => {

  it('displays loading message when data is empty', () => {
    const contextValue = { data: [], filteredData: [] };
    renderWithContext(contextValue);

    expect(screen.getByText(/Loading books, please wait.../i)).toBeInTheDocument();
  });

  it('renders books when data is loaded', () => {
    const contextValue = { 
      data: [{ id: 1, title: 'Book 1' }], 
      filteredData: [{ id: 1, title: 'Book 1' }] 
    };
    renderWithContext(contextValue);

    expect(screen.queryByText(/Loading books/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Book 1/i)).toBeInTheDocument();
  });

  it('renders the All Books link', () => {
    const contextValue = { 
      data: [{ id: 1, title: 'Book 1' }], 
      filteredData: [{ id: 1, title: 'Book 1' }] 
    };
    renderWithContext(contextValue);

    const link = screen.getByRole('link', { name: /All Books/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/books');
  });

});
