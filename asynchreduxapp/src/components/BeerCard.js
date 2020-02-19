import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const BeerCard = props => {
  const classes = useStyles();

  return (
    <div>
    {props.error ? (
        <div className='error'>{props.error}</div>
    ) : (
        props.beers.map(beer => 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={beer.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {beer.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {beer.description}
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
    ))}
    </div>

  );
}

const mapStateToProps = state => {
    return {
        beers: state.beers,
        error: state.error
    };
};
export default connect(
    mapStateToProps,
    {}
)(BeerCard);

