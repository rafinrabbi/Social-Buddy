import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Post.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    // marginTop: 15,
    // marginBottom: 30,
    // marginRight: 15,
    margin: 7,
  },
  media: {
    height: 140,
    minWidth: 320,
  },
});

const Post = (props) => {
  const classes = useStyles();
  const { id, title, body } = props.post;
  return (
    <div>
 
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Post Id: {id}
        </Button>
        <Link className="linkStyle" to={`/post/${id}`}>
          <Button size="small" variant="contained" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
};

export default Post;
