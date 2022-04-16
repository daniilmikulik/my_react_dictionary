import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./SearchPage";
import BookmarksPage from "./BookmarksPage";
import NotFound from "./NotFound";

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<SearchPage/>}/>
                <Route path={'/bookmarks'} element={<BookmarksPage/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;