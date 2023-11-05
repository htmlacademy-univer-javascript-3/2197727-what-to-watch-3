export type PromoFilmCardProps = {
  imgSrc: string;
  title: string;
  genre: string;
  year: string;
}

export type SmallFilmCardProps = {
  id?: number;
  imgSrc: string;
  title: string;
}

export type AppProps = {
  promoFilmCard: PromoFilmCardProps;
  smallFilmCards: SmallFilmCardProps[];
}

export type MainScreenProps = {
  promoFilmCard: PromoFilmCardProps;
  smallFilmCards: SmallFilmCardProps[];
}

export type MyListScreenProps = {
  smallFilmCards: SmallFilmCardProps[];
}
