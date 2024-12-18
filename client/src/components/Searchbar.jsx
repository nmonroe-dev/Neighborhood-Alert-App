import "../styles/Searchbar.css"


function Searchbar({ handleSubmit, setZip, zip }) {
    return (
        <div className="searchbar-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="zip"
                    value={zip}
                    placeholder="Search by zipcode"
                    onChange={(event) => setZip(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Searchbar;



