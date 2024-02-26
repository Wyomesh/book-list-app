import { createContext, useState } from "react";
import axios from "axios";
const bookContext = createContext();
function Provider({ children }) {
    const [books, setBooks] = useState([]);
    const fetchBook = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }
    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", title = { title });
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks);
    }
    const deleteById = async (bookId) => {
        await axios.delete(`http://localhost:3001/books/${bookId}`)
        const updatedBooks = books.filter((book) => {
            return bookId !== book.id;
        })
        setBooks(updatedBooks);
    }
    const editById = async (bookId, newTitle) => {
        await axios.patch(`http://localhost:3001/books/${bookId}`, {
            title: newTitle
        })
        const updatedBooks = books.map((book) => {
            if (book.id === bookId) {
                return { ...book, title: newTitle };
            }
            return book;
        })
        setBooks(updatedBooks);
    }


    const valueToShare = {
        books,
        fetchBook,
        createBook,
        deleteById,
        editById
    };
    return <bookContext.Provider value={valueToShare}>
        {children}
    </bookContext.Provider>
}
export { Provider };
export default bookContext;