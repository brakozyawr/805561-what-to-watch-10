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
type Film = {
  image: string,
  alt: string,
  title: string
}

type Props = {
  filmEl:Film
}

//попытка итерироваться по массиву объектов с данными фильмов прямо в компоненте - не удалась, т.к. функция возврвщвлв
//массив JSX.Element[], а так низзя, решение не дожала, интересно, как можно это сделать

/*type Props = {
  films:Film[]
}*/

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

function FilmCard({filmEl}: Props): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
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


