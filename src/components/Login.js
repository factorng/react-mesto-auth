import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Login({
  isOpen, onSubmit,
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='login-popup popup_open'>
      <Header/>
      <form className="login-popup__form" method="post" action="#" noValidate onSubmit={handleSubmit}>
        <h3 className="login-popup__title">Вход</h3>
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
          Ещё не зарегистрированы?
          <Link to="/signup" className="login-popup__link">Регистрация</Link>
        </div>
      </form>
    </div>

  );
}

export default Login;
