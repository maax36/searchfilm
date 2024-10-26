import { useState } from "react";
import { Search } from "@/components/Search";
import { Films } from "@/components/Films";

export default function Home() {
    const [search, setSearch] = useState('');

    return (
        <main>
            <h1>Поиск omdbapi.com</h1>
            <Search setSearch={setSearch} />
            <Films search={search} />
        </main>
    );
}
