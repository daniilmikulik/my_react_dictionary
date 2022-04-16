import { Typography } from '@mui/material';

const NotFound = (props) => {
    return (
        <Typography variant="h4" align={'center'} data-testid={'not-found-page'}>
            Oops! Something went wrong
        </Typography>
    );
}

export default NotFound;