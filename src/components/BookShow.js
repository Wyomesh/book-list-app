import BookEdit from "./BookEdit";
import { useState, useContext } from "react";
import bookContext from "../context/book";
function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false)
    const handleEdit = () => {
        setShowEdit(!showEdit);
    };
    const { deleteById } = useContext(bookContext);
    const handleDelete = () => {
        deleteById(book.id);
    };
    const handleBookEdit = () => {
        setShowEdit(false);
    };
    let content = book.title;
    if (showEdit) {
        content = <BookEdit book={book} onBookEdit={handleBookEdit} />
    };
    return (<div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.id} />
        {content}
        <div className="actions">
            <button onClick={handleEdit} className="edit">
                Edit
            </button>
            <button onClick={handleDelete} className="delete">
                Delete
            </button>
        </div>
    </div>);
}
export default BookShow;