import {Typography} from "@mui/material";
import WordCard from "./WordCard";
import {useSelector} from "react-redux";
import Loader from "./Loader";

const Content = (props) => {
    const words = useSelector((state) => {
        if (props.mode === 'current'){
            return state.current;
        }
        return state.bookmarks;
    })

    const showWords = () => {
        if (!words && !props.isLoading ){
            return <Typography> Nothing to show here </Typography>;
        } else if (!words && props.isLoading){
            return <Loader/>;
        }
        if (!Array.isArray(words) && words.message){
            return <Typography> {words.message} </Typography>
        }
        return words.map((word, index) => {
            if (word.word){
                return <WordCard key={index} word={word} />;
            }
            return null;
        })
    }

    return (
        <div style={{
            marginTop: '1rem',
            marginLeft: "1.5rem"
        }}>
            <Typography variant={'h3'} component={'h3'}> {props.title} </Typography>
            <div>
                { showWords() }
            </div>
        </div>
    );
}

export default Content;