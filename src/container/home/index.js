import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, Hidden } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SocialIcon from "../../component/social-media/index";
import banner from "../../resources/home.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
  },
  control: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(4),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={7} md={7} sm={7} xs={12} className={classes.gridItem}>
        <Paper className={classes.paper}>
          <Typography variant="h3" component="h2" gutterBottom>
            Hi all i'm Munish
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <SocialIcon />
          <section>
            <Button variant="contained" color="primary" size="large">
              Primary
            </Button>
          </section>
        </Paper>
      </Grid>
      <Grid item lg={5} md={5} sm={5} xs={12}>
        <Hidden only={["xs"]}>
          <img src={banner} alt="Munish Shukla" width="100%" />
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default Home;
