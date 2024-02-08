import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import {postCity} from '../api/postCity'
import {deleteCity} from '../api/deleteCity'

export default function CityCard({city}) {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="194"
                src={city.conditionPic}
                alt="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {city.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {city.condition}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {city.temperature}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add">
                    <FavoriteIcon onClick={() => postCity(city)}/>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={() => deleteCity(city.name)}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
