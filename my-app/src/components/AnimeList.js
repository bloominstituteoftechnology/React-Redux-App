import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles(theme => ({
  cards: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center"
  },
  root: {
    width: "30%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
}));

function AnimeList(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.container}>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.animes.map(anime => (
          <div key={anime.mal_id} className={classes.cards}>
            <Card className={classes.root}>
              <CardHeader title={anime.title} />
              <CardMedia
                className={classes.media}
                image={anime.image_url}
                title="anime img url"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Score: {anime.score}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
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
                  <Typography paragraph>{anime.synopsis}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    animes: state.animes,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(AnimeList);