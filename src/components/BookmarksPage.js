import PageNavbar from "./PageNavbar";
import {Container} from "@mui/material";
import PageHeader from "./PageHeader";
import SearchForm from "./SearchForm";
import Content from "./Content";

const BookmarksPage = (props) => {
    const headerTitle = "Bookmarks page";
    const headerContent = "Here you can find the words that you searched during the current session."
    const contentTitle = 'Bookmarks results:';

    return (
        <>
            <PageNavbar/>
            <Container maxWidth="xl">
                <PageHeader title={headerTitle} content={headerContent}/>
                <Content title={contentTitle} mode={'bookmarks'}/>
            </Container>
        </>
    );
}

export default BookmarksPage;