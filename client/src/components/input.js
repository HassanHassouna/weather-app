import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Search({setSearch}) {
    const [s, setS] = React.useState('')
    const onClick = () => {
        setSearch(s);
    }


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField onChange={(e) => {
                setS(e.target.value);
            }} id="outlined-basic" label="Search" variant="outlined"/>
            <Button onClick={onClick} variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>
        </Box>
    );
}
