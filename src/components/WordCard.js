import {Card, CardContent, List, ListItem, ListItemText, Typography} from "@mui/material";

const WordCard = (props) => {
    const findPronunciation = (phonetics) => {
        if (!phonetics){
            return 'no information';
        }
        let result = [];
        phonetics.forEach((item) => {
            if (item.text){
                result.push(item.text);
            }
        });
        return result.join(', ');
    }

    const displayMeanings = (meanings) => {
        const displayDefinitions = (word) => {
            if (!word.definitions){
                return "Nothing about definitions found";
            }
            let result = ["Definitions: "];
            word.definitions.forEach((item) => {
                if (item.definition){
                    result.push(item.definition);
                }
            })
            return result.join('\n');
        }

        if (!meanings){
            return null;
        }

        return (
            <List>
                {
                    meanings.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={`Part of speech: ${item.partOfSpeech}`}
                                    secondary={displayDefinitions(item)}
                                />
                            </ListItem>
                        );
                    })
                }
            </List>
        );
    }

    return (
        <Card sx={{
            marginBottom: '1rem'
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Current word
                </Typography>
                <Typography component={'h4'} variant={'h4'}> Your word: {props.word.word} </Typography>
                <Typography component={'h4'} variant={'h4'}>
                    Variants of pronunciation: {findPronunciation(props.word.phonetics)}
                </Typography>
                { displayMeanings(props.word.meanings) }
            </CardContent>
        </Card>
    );
}

export default WordCard;