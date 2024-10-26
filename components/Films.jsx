import { useState, useEffect } from "react";
import { FilmCard } from "./FilmCard";

export function Films({ search }) {
    const apiKey = '19b08fe1';
    const [films, setFilms] = useState([]);

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

        fetchFilms();
    }, [search]);

    return <div className="moviesContainer">
        <FilmCard films={films} />
    </div>;
}