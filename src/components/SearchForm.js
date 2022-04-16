import {Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import addBookmarkCreator from "../store/actionCreators/addBookmarkCreator";
import {useState} from "react";

const SearchForm = (props) => {
    const [word, handleWord] = useState('');
    const dispatch = useDispatch();

    const wordsLoader = () => {
        const fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        props.handleLoading(true);

        fetch(fetchUrl)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                props.handleLoading(false);
                dispatch(addBookmarkCreator(response));
            })
            .catch((error) => {
                props.handleLoading(false);
                console.log(error);
            })

    }

    return (
        <div style={{
            marginTop: '1rem',
            marginLeft: '1.5rem'
        }}>
            <form style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <TextField sx={{
                    width: '50%'
                }} label="Search here" variant="standard" onChange={
                    (event) => {
                        handleWord(event.target.value)
                    }} value={word} />
                <Button sx={{
                    marginLeft: '1rem'
                }} onClick={
                    () => {
                        wordsLoader();
                    }
                } variant="contained" > Search </Button>
            </form>
        </div>
    );
}

export default SearchForm;