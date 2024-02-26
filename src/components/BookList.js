import BookShow from "./BookShow"
import { useContext } from "react";
import bookContext from "../context/book";
function BookList() {
    const { books } = useContext(bookContext);
    const renderedBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} />
    })
    return (<div className="book-list">
        {renderedBooks}
    </div>);
}
export default BookList;