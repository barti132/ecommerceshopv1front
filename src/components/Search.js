import React, {useState} from "react";
import './Search.css';

function Search() {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        console.log(event);
    }

    return(
        <div className="search-area">
            <form onSubmit={handleSubmit}>
                <select id="category" name="category" value={category} onChange={(event => setCategory(event.target.value))} className="navbar-select-input">
                    <option value="1">Electronics</option>
                    <option value="2">Books</option>
                    <option value="3">Video games</option>
                    <option value="4">Home & garden</option>
                </select>
                <input type="text" name="product" value={text} onChange={(event => setText(event.target.value))} placeholder="Search" className="navbar-search-input"/>
                <button type="submit" className="btn btn-primary">
                    <i className=" bi bi-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;