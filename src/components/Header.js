import React from 'react';
import { Link, Route } from 'react-router-dom';
import logoPath from '../images/logo.svg';

function Header({ userData, signOut }) {
  return (
        <header className="header">
            <img src={logoPath} alt="логотип Место" className="header__logo" />
            <Route path="/signup">
              <Link to="/signin" className="header__link">Войти</Link>
            </Route>
            <Route path="/signin">
              <Link to="/signup" className="header__link">Регистрация</Link>
            </Route>
            <Route exact path="/">
                <p className="header__account">{userData && userData.email}
                  <button className="header__button" onClick={signOut} type="button">Выйти</button>
                </p>
            </Route>
        </header>
  );
}

export default Header;
