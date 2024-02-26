import { useState, useContext } from "react";
import bookContext from "../context/book";
function BookEdit({ book, onBookEdit }) {
    const [newTitle, setNewTitle] = useState(book.title);
    const handleChange = (event) => {
        setNewTitle(event.target.value);
    }
    const { editById } = useContext(bookContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        editById(book.id, newTitle);
        onBookEdit();
    }
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label className="label">Title</label>
            <input onChange={handleChange} value={newTitle} className="input" />
            <button className="button is-primary">Save</button>
        </form>
    );
}
export default BookEdit;