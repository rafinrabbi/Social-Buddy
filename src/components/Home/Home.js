import React, { useState, useEffect } from "react";
import { Grid,  Box } from "@material-ui/core";
import Post from "../Post/Post";
import Header from "../Header/Header";
import Gridview from "../Gridview/Grid"
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


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });
  const classes = useStyles();
  return (
    <div>
      <Header></Header>
      {/* //<Gridview></Gridview> */}
      <br/>
      

      <Grid container>
        {" "}
        {posts.map((post) => (
          <Post post={post}></Post>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
