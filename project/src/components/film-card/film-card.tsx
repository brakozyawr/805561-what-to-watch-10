//это первоначальный вариант, чтобы все карточки фильмов были одинаковыми
/*function FilmCard(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
      </h3>
    </article>
  );
}*/

//это жалкая попытка передать в карточки оазные данные
/*type Film = {
  image: string,
  alt: string,
  title: string
}*/
//type FilmCards = Film[];


type Props = {
  filmEl:{
    image: string,
    alt: string,
    title: string
  }
}
/*type Props = {
  films:Film[]
}*/
//присвоила  films тип any потому, что не знаю, какой тип, а линтер съел меня
//key в теге article - для линтера, не знаю, зачем он, но линтер отстал
/*function FilmCard({films}: Props): JSX.Element[] {
  const filmsCard = films.map((film:Film) =>
    (
      <article key="" className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src={film.image} alt={film.alt} width="280" height="175"/>
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{film.title}</a>
        </h3>
      </article>
    )
  );
  return filmsCard;
}*/


/*function FilmCard({films}: Props): string {
  const filmsCard: JSX.Element[] = [];
  films.forEach((film:Film) =>
    filmsCard.push(
      <article key="" className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src={film.image} alt={film.alt} width="280" height="175"/>
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{film.title}</a>
        </h3>
      </article>
    )
  );
  return (filmsCard.join(""));
}*/

function FilmCard({filmEl}: Props): JSX.Element {
  return (
    <article key="" className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmEl.image} alt={filmEl.alt} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmEl.title}</a>
      </h3>
    </article>
  );
}


export default FilmCard;


