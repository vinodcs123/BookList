import { useContext } from 'react';
import '../styles/SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { DataContext } from '../context/DataContext';

const SearchBar = () => {
    const{setQuery}=useContext(DataContext)
    return (
        <div className="searchbar">
            <div className="searchbar-items">
                <SearchIcon style={{ fontSize: 20 }} />
                <input 
                    className="searchbar-input" 
                    type="text" 
                    placeholder="Search" 
                    onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SearchBar;
