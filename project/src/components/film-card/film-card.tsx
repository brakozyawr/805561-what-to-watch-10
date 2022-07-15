import {Film} from 'src/types/types';

//это тупенький первоначальный вариант, чтобы все карточки фильмов были одинаковыми
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


//вариант, когда итерация по элементам списка фильмов происходит извне, над самим компонентом карточки фильма, в main.tsx
/*type Props = {
  film:Film
}
function FilmCard({film}: Props): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.image} alt={film.alt} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.title}</a>
      </h3>
    </article>
  );
}*/


//вариант, когда итерация по элементам списка фильмов внутри компонента
//ура, оно работает!!! )))

type Props = {
  films:Film[]
}

const FilmCards = ({films}: Props): JSX.Element => {
  const filmCardList =
    (
      <>
        {films.map((film:Film) =>
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
        )};
      </>
    );
  return filmCardList;
};

export default FilmCards;


