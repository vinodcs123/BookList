import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
const Header=()=>{
    const navigate = useNavigate();
    return (
        <div className='header'>
        <div className="header-title">
            <h3 className="title" onClick={()=>navigate('/')}>atom</h3>
        </div>
        <div className="header-items">
            <h2 className="header-item-name" onClick={()=>navigate('/books')}>Books</h2>
            <button className="header-item-button">Create New Book</button>
        </div>
        </div>
    )
}


export default Header;