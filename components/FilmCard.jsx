import React, { memo } from 'react';
import classes from '../css_module/filmcard.module.css';

export const FilmCard = memo(({ films }) => {
    console.log('Render FilmCard');
    return (
        <>
            {
                films.map(({ Title, Poster }, index) => (
                    <div key={index} className={classes.cardmovie}>
                        <div
                            className={classes.moviePoster}
                            style={{ backgroundImage: `url(${Poster})` }}
                        ></div>
                        <div className={classes.moviename}>{Title}</div>
                        <button className={classes.movieDetails}>Подробнее...</button>
                    </div>
                ))
            }
        </>
    );
});