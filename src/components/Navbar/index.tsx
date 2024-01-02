import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import { CHARACTERS_LIST_ROUTE, LOCATIONS_ROUTE, EPISODES_ROUTE, CHARACTER_ROUTE } from '../../app/routes/configs';


interface NavbarProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
  return (
    <div className='nav'>
      <Link to={CHARACTERS_LIST_ROUTE}>Персонажи</Link>
      <Link to={LOCATIONS_ROUTE}>Локации</Link>
      <Link to={EPISODES_ROUTE}>Эпизоды</Link>
      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
    </div>
  );
};

export default Navbar;