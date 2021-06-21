import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  function addFavoriteHandler(meetup) {
    setFavorites((previous) => previous.concat(meetup));
  }

  function removeFavoriteHandler(meetupId) {
    setFavorites((previous) =>
      previous.filter((meetup) => meetup.id !== meetupId)
    );
  }

  function isFavoriteHandler(meetupId) {
    return favorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
