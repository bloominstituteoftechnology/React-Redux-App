import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles(theme =>({
  cards: {
      direction:'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
  },  
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  root: {
    maxWidth: 300,
    borderRadius: 5,
    margin: 30,
  },
  media: {
    height: 140,
  },
}));

const BeerCard = props => {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
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
        
      </CardActions>
      <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>Food Pairings</Typography>
        </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
            {beer.food_pairing}
            </Typography>
            </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>      
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Brewers Tips</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           {beer.brewers_tips}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>     

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

