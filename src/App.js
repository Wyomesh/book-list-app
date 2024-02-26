import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import bookContext from "./context/book";

function App() {
    const { fetchBook } = useContext(bookContext);
    useEffect(() => {
        fetchBook();
    },[]);

    return (
        <div>
            <BookCreate />
            <BookList />
        </div>
    );
}
export default App;