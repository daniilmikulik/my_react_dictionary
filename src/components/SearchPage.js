import PageNavbar from "./PageNavbar";
import PageHeader from "./PageHeader";
import {Container, Typography} from "@mui/material";
import SearchForm from "./SearchForm";
import Content from "./Content";
import {useState} from "react";

const SearchPage = (props) => {
    const headerTitle = "Search page";
    const headerContent = "Here you can search information about the word you're interested in. " +
        "Just type something in the 'search' input!";
    const contentTitle = 'Search results:';

    const [isLoading, updateLoading] = useState(false);

    const handleLoading = (value) => {
        updateLoading(value);
    }

    return (
        <>
            <PageNavbar/>
            <Container maxWidth="xl">
                <PageHeader title={headerTitle} content={headerContent}/>
                <SearchForm handleLoading={handleLoading}/>
                <Content isLoading={isLoading} title={contentTitle} mode={'current'}/>
            </Container>

        </>
    );
}

export default SearchPage;