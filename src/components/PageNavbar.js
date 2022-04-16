import {AppBar, Container, createTheme, ThemeProvider, Toolbar, Typography} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});


const PageNavbar = (props) => {
    const pages = [
        {
            page: "Main page",
            link: "/"
        },
        {
            page: "Bookmarks",
            link: "/bookmarks"
        }];

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary">
                <Container data-testid={'main-navbar'} maxWidth={'xl'} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    <Toolbar>
                        {
                            pages.map((page) => {
                                return (
                                    <Typography variant="h6" component="a" href={page.link} sx={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        marginRight: '1rem'
                                    }}>
                                        {page.page}
                                    </Typography>
                                );
                            })
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default PageNavbar;