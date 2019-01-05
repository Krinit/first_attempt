import React from 'react';
import './NewsItem.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function MediaCard(props) {
    return (
        <div>
        <Card className='card'>
            <CardHeader title={props.title} />
            <CardActionArea>
                <CardMedia
                    className='media'
                    image={props.imgSrc}
                />
                <CardContent>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
            <Paper elevation={1}>
                <CardHeader subheader={`you are signed in as ${props.username}`} />
            </Paper>
        </div>
    );
}


export default MediaCard;
