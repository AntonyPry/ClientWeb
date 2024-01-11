import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import {
  CHARACTERS_LIST_ROUTE,
  REGISTER_ROUTE,
  EPISODES_ROUTE,
} from '../../app/routes/configs';

interface NavbarProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
  return (
    <div className="nav">
      <Link to={CHARACTERS_LIST_ROUTE}>Персонажи</Link>
      <Link to={REGISTER_ROUTE}>Регистрация</Link>
      <Link to={EPISODES_ROUTE}>Эпизоды</Link>
      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
    </div>
  );
};

export default Navbar;
