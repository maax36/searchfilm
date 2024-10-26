export function Search({ setSearch }) {
    return (
        <input 
            className="searchInput"
            type="text" 
            placeholder="Введите название...."
            onChange={(ev) => setSearch(ev.target.value)}
        />
    );
}
