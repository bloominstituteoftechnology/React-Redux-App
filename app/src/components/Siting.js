import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WebIcon from '@material-ui/icons/Web';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// temporary initialState
let siting = {
    id:"5a049b7e686f743ec5040000",
    species:"orca",
    quantity:"5",
    description:"Spotted from the Edmonds-Kingston ferry, near fishing boats.",url:"http://hotline.whalemuseum.org/sightings/5a049b7e686f743ec5040000",latitude:47.79953,
    longitude:-122.47996699999999,
    location:"",
    sighted_at:"2017-11-09T18:11:00Z",
    created_at:"2017-11-09T18:16:30Z",
    updated_at:"2017-11-14T22:20:45Z",
    orca_type:"unknown",
}

const Siting = (props) => {

  // console.log("props: ", props);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {siting.quantity}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${siting.species}`.toUpperCase()}
        subheader={`${siting.sighted_at}`}
      />
      <CardMedia
        className={classes.media}
        // image="/static/images/cards/paella.jpg"
        image="`${siting.url}`"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {siting.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton href={siting.url} aria-label="web">
          <WebIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Coordinates:<br/>
            {siting.latitude} latitude <br/>
            {siting.longitude} longitude <br/>
          </Typography>
          <Typography paragraph>
            Location: {siting.location}<br/>
            
            Type: {siting.orca_type}<br/>
            ID: {siting.id}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );

};


export default Siting;