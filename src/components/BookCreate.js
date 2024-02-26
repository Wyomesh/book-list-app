import { useState, useContext } from "react";
import bookContext from "../context/book";
function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(bookContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    }
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    return (<div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleFormSubmit}>
            <label className="label">Title : </label>
            <input onChange={handleChange} value={title} className="input" type="text" />
            <button className="button">Submit</button>
        </form>
    </div>);
}
export default BookCreate;