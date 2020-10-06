import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Register({
  onSubmit,
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(email, password);
    console.log(email, password);
  }

  return (
    <div className='login-popup popup_open'>
      <Header/>
      <form className="login-popup__form" method="post" action="#" noValidate onSubmit={handleSubmit}>
        <h3 className="login-popup__title">Регистрация</h3>
        <input
          className="login-popup__input"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email || ''}
        />
        <input
          className="login-popup__input"
          type="password"
          placeholder="Пароль"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password || ''}
        />
        <button
          className="login-popup__button-submit"
          type="submit"
          aria-label="Войти"
        >
          Войти
        </button>
        <div className="login-popup__register">
          Уже зарегистрированы?
          <Link to="/signin" className="login-popup__link">Войти</Link>
        </div>
      </form>
    </div>

  );
}

export default Register;
