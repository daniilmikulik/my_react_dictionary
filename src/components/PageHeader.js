import {Container, Typography} from "@mui/material";

const PageHeader = (props) => {
    return (
        <div style={{
            marginTop: '1rem',
            marginLeft: "1.5rem"
        }}>
            <Typography variant={'h2'} component={'h2'}>
                { props.title }
            </Typography>
            <Typography variant={'h5'} component={'p'}>
                { props.content }
            </Typography>
        </div>
    );
}

export default PageHeader;