import React, { useState, useEffect, memo } from "react";
import { FilmCard } from "./FilmCard";

export const Films = memo(({ search }) => {
    const apiKey = '19b08fe1';
    const [films, setFilms] = useState([]);
    console.log("render Films");
    useEffect(() => {
        async function fetchFilms() {
            try {
                const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}&page=1`);
                const data = await response.json();
                if (data.Response === "True") {
                    setFilms(data.Search);
                } else {
                    setFilms([]);
                }
            } catch (err) {
                console.log('Ошибка:', err);
                setFilms([]);
            }
        }

        if (search) {
            fetchFilms();
        } else {
            setFilms([]);
        }
    }, [search]);

    return (
        <div className="moviesContainer">
            {films.length > 0 ? <FilmCard films={films} /> : null}
        </div>
    );
});