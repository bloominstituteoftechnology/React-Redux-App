import React, { useState } from 'react';
// import axios from 'axios'; // for map image


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia'; // for map image
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WebIcon from '@material-ui/icons/Web';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
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
    backgroundColor: "dodgerblue",
  },
}));


const Sighting = (props) => {
  const { sighting } = props;

  const classes = useStyles()
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  /*
  // GOOGLE API to get map image off of lat and longitude
  const [googleImage, setGoogleImage] = useState(undefined); // what do I initialize as
  axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=${sighting.latitude},${sighting.longitude}&zoom=12&size=400x400&maptype=hybrid&key=AIzaSyASnLGhffYBRZ60GqFHOYBSoPiHpW_kJSE`) // plug in lat and long data from props / state

  // respond to happy path & sad path, updating state with API response
    .then(res => {
        console.log("res: ", res);
        // console.log("res.data.species: ", res.data)
        // save to state?  what is best state versus variable
    })
    .catch(err => {
        console.log("error: ", err)
    })
  */

  // Formats date from props string of seconds, epoch
  let parsedDate = Date.parse(sighting.sighted_at); // number of seconds
  var dateOfSighting = Date(1000 * parsedDate);


  if (!sighting) {
    return <div> loading </div>
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} >
            {sighting.quantity || "1" }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${sighting.species}`.toUpperCase()}
        subheader={`${dateOfSighting}`}
      />
      {/* <CardMedia
        className={classes.media}
        // image="/static/images/cards/paella.jpg"
        image="`${sighting.url}`"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {sighting.description}<br/>
          <br/>
          Location: {sighting.location}<br/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton href={sighting.url} aria-label="web">
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
            {sighting.latitude} latitude <br/>
            {sighting.longitude} longitude <br/>
          </Typography>
          <Typography paragraph>            
            Type: {sighting.orca_type}<br/>
            ID: {sighting.id}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );

};


export default Sighting;// export with usestyles / withstyles