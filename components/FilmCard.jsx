import classes from '../css_module/filmcard.module.css';

export function FilmCard({ films }) {

    return (
        <>
            {
                films.map(({ Title, Poster }, index) => (
                    <div key={index} className={classes.cardmovie}>
                        <div
                            className={classes.moviePoster}
                            style={{backgroundImage: `url(${Poster})`}}
                        ></div>
                        <div className={classes.moviename}>{Title}</div>
                        <button className={classes.movieDetails}>Подробнее...</button>
                    </div>
                ))
            }
        </>
    );
}