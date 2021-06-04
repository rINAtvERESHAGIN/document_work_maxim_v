import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    height: "500px",
    width: "500px",
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
    backgroundColor: "red",
  },
}));


const MenuTile = ({title, description, image, to, history}) => {
  const classes = useStyles();

  const openResource = () => {
    history.push(to);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openResource}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" color="primary" onClick={openResource}>
          Открыть
        </Button>
        <Button size="small" color="primary">
          Узнать больше
        </Button>

      </CardActions>
    </Card>
  );
};

MenuTile.defaultProps = {
  title: "Заголовок",
  description: "Описание",
  to: "/home",
}

MenuTile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default withRouter(MenuTile);
