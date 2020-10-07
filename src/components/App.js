import React, { useCallback, useEffect, useState } from 'react';
import {
  Route, Switch, Redirect, useHistory,
} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import api from '../utils/Api';
import * as auth from '../utils/auth';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';

function App() {
  const [isButtonProgress, setIsButtonProgress] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false,
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false,
  );
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(
    false,
  );
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [cardToDelete, setCardToDelete] = useState('');
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: '',
  });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = React.useState(null);
  const history = useHistory();

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setUserData({
              id: res.data._id,
              email: res.data.email,
            });
            setLoggedIn(true);
            history.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
          setIsInfoTooltipOpen(true);
          history.push('/signin');
        });
    }
  }, [history]);

  React.useEffect(() => {
    tokenCheck();
  }, [loggedIn, tokenCheck]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCards(cards);
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick({ name, link }) {
    setSelectedCard({
      isOpen: true,
      name,
      link,
    });
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '',
    });
    setIsInfoTooltipOpen(false);
  }
  function handleAddPlaceSubmit({ placeName, placeLink }) {
    setIsButtonProgress(true);
    api
      .addNewCard(placeName, placeLink)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => setIsAddPlacePopupOpen(false))
      .catch((err) => console.log(err))
      .finally(() => setIsButtonProgress(false));
  }

  function handleUpdateUser({ name, occupation }) {
    setIsButtonProgress(true);
    api
      .updateUserProfile(name, occupation)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => setIsEditProfilePopupOpen(false))
      .catch((err) => console.log(err))
      .finally(() => setIsButtonProgress(false));
  }

  function handleUpdateAvatar({ avatar }) {
    setIsButtonProgress(true);
    api
      .setUserAvatar(avatar)
      .then((res) => {
        setCurrentUser({ ...currentUser, avatar: res.avatar });
        closeAllPopups();
      })
      .then(() => setIsEditAvatarPopupOpen(false))
      .catch((err) => console.log(err))
      .finally(() => setIsButtonProgress(false));
  }
  function handleCardDelete(cardDelete) {
    setIsConfirmDeletePopupOpen(true);
    setCardToDelete(cardDelete);
  }

  function handleCofirmDelete(cardDelete = cardToDelete) {
    setIsButtonProgress(true);
    api
      .deleteCard(cardDelete._id)
      .then(() => {
        const newCards = cards.filter((card) => card._id !== cardDelete._id);
        setCards(newCards);
      })
      .then(() => setIsConfirmDeletePopupOpen(false))
      .catch((err) => console.log(err))
      .finally(() => setIsButtonProgress(false));
  }

  function handleLogin(email, password) {
    return auth.authorize(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('jwt', res.token);
          tokenCheck();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setIsInfoTooltipOpen(true);
      });
  }

  function handleRegister(email, password) {
    return auth.register(email, password)
      .then((res) => {
        history.push('/signin');
        setLoggedIn(true);
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    history.push('/signin');
    setLoggedIn(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header userData={userData} signOut={handleSignOut}/>
        <Switch>
          <Route path="/signin">
            <Login onSubmit={handleLogin}/>
          </Route>
          <Route path="/signup">
            <Register onSubmit={handleRegister} />
          </Route>
          <ProtectedRoute
              exact path="/"
              loggedIn={loggedIn}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              handleCardClick={handleCardClick}
              handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
              cards={cards}
              component={Main}
          />
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isButtonProgress={isButtonProgress}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddPlaceSubmit}
          isButtonProgress={isButtonProgress}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          isButtonProgress={isButtonProgress}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup {...selectedCard} onClose={closeAllPopups} />
        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onSubmitClick={handleCofirmDelete}
          isButtonProgress={isButtonProgress}
        />
        <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} isOK={loggedIn}/>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
