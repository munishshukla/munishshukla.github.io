import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Button,
  Hidden,
  Avatar,
  // Grow,
  // IconButton,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Location from "@material-ui/icons/Room";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Icon from "@material-ui/core/Icon";

import SocialIcon from "../../component/social-media/index";
// import banner from "../../resources/home.svg";
import banner from "../../resources/profile.png";
import noveltyBanner from "../../resources/novelty-banner.png";
import stackablBanner from "../../resources/stackabl-banner.jpg";
import xlpatBanner from "../../resources/xlpat-banner.jpg";

import me from "../../resources/me.jpg";
import xlpat from "../../resources/xlpat.jpg";
import stackabl from "../../resources/stackabl.jpg";
import lpu from "../../resources/lpu.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  headingPadding: {
    paddingBottom: theme.spacing(7),
  },
  extraPadding: {
    paddingBottom: theme.spacing(10),
  },
  control: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(4),
  },
  paperTimeline: {
    padding: "6px 16px",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  avtar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    // padding: theme.spacing(2),
  },
  avtarbanner: {
    width: theme.spacing(52),
    height: theme.spacing(52),
    // padding: theme.spacing(2),
  },
  rootGridList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 1200,
    height: 450,
  },
  hoverEffect: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

function Home() {
  const classes = useStyles();
  const language = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "Sass", icon: "fab fa-sass" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React Js", icon: "fab fa-react" },
    { name: "AngularJs", icon: "fab fa-angular" },
    { name: "Node Js", icon: "fab fa-node" },
    { name: "Electron Js", icon: "fa fa-atom" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Wordpress", icon: "fab fa-wordpress" },
    { name: "Python", icon: "fab fa-python" },
    { name: "C++", icon: "fab fa-cuttlefish" },
    { name: "MySql", icon: "fa fa-database" },
    { name: "Mongo DB", icon: "fa fa-server" },
    { name: "ElasticSearch", icon: "fab fa-searchengin" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "NPM", icon: "fab fa-npm" },
  ];
  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <Grid item lg={8} md={8} sm={8} xs={12} className={classes.paper}>
          <Paper className={classes.paper}>
            <Typography variant="h3" component="h2" gutterBottom>
              Hi all i'm Munish{" "}
              <Icon
                color="secondary"
                fontSize="inherit"
                className="fa fa-hand-spock"
              ></Icon>
            </Typography>

            <Typography variant="body1" gutterBottom>
              An aspiring Software Developer having 4+ years of experience in
              software development. I worked with various product-based software
              firms as a software/ desktop application developer
            </Typography>
            <Typography variant="body1" gutterBottom>
              An integral part of this particular vocational sector is that it
              evolves faster than any other. As a result, I make sure not to
              stick to a particular technology, and to widen my knowledge, so
              that I am always ready to be standing next to the state of the art
              technology. As a result, I have worked on various technologies
              such as PHP, Python, JAVA, etc.
            </Typography>
            <Typography variant="body1" gutterBottom>
              My current niche lies with building applications with javascript
              and using technologies/frameworks such as NodeJs, ElectronJs,
              React-Native, ReactJs, TypeScript, Redux, and docker, etc.
            </Typography>
            <Grid container justify="space-between">
              <section style={{ marginTop: "2vh" }}>
                <SocialIcon />
              </section>
              <section style={{ marginTop: "2vh" }}>
                <a
                  href=" https://drive.google.com/file/d/1QKNZJXZqk_lS95u2l1l_zG3dYLHnScBQ/view?usp=sharing"
                  target="_blank"
                >
                  <Button variant="contained" color="primary" size="large">
                    See My Resume
                  </Button>
                </a>
              </section>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Hidden only={["xs"]}>
            {/* <img
              src={banner}
              alt="Munish Shukla"
              width="100%"
              style={{ objectFit: "cover" }}
            /> */}
            <Grid container justify="center">
              <Avatar className={classes.avtarbanner} src={banner} />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.root}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container justify="center" className={classes.headingPadding}>
            <Typography variant="h3" component="h2" gutterBottom>
              Experience
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  May 2019- Current
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <a
                    href="https://www.tru.agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar alt="Tru" src={stackabl} />
                  </a>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paperTimeline}>
                  <Typography variant="h6" component="h1">
                    Senior Software Developer
                  </Typography>
                  <Typography>
                    Tru IT Solutions Inc./Mysense Technologies
                  </Typography>
                  <Button
                    variant="text"
                    color="default"
                    style={{ textTransform: "none" }}
                    startIcon={<Location />}
                  >
                    Chandigarh
                  </Button>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  July 2017- May 2019
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <a
                    href="https://www.xlpat.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar alt="Xlpat" src={xlpat} />
                  </a>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paperTimeline}>
                  <Typography variant="h6" component="h1">
                    Software Product Developer
                  </Typography>
                  <Typography>Xlpat TT Consultants Pvt. Ltd.</Typography>
                  <Button
                    variant="text"
                    color="default"
                    style={{ textTransform: "none" }}
                    startIcon={<Location />}
                  >
                    Chandigarh/ Hyderabad
                  </Button>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  Jan 2017- July 2018
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <a
                    href="https://www.xlpat.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar alt="Xlpat" src={xlpat} />
                  </a>
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paperTimeline}>
                  <Typography variant="h6" component="h1">
                    Software Developer Intern
                  </Typography>
                  <Typography>Xlpat TT Consultants Pvt. Ltd.</Typography>
                  <Button
                    variant="text"
                    color="default"
                    style={{ textTransform: "none" }}
                    startIcon={<Location />}
                  >
                    Chandigarh/ Hyderabad
                  </Button>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  Jun 2015- July 2015
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <a
                    href="https://www.lpu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar alt="LPU" src={lpu} />
                  </a>
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paperTimeline}>
                  <Typography variant="h6" component="h1">
                    Student Counselor
                  </Typography>
                  <Typography>Lovely Professional University,</Typography>
                  <Button
                    variant="text"
                    color="default"
                    style={{ textTransform: "none" }}
                    startIcon={<Location />}
                  >
                    Phagwara
                  </Button>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.root} spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container justify="center" className={classes.headingPadding}>
            <Typography variant="h3" component="h2" gutterBottom>
              What I do
            </Typography>
          </Grid>
        </Grid>
        {language.map((val) => (
          <Grid item key={val.name} lg={2} md={2} sm={2} xs={5}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.hoverEffect}
            >
              <i
                title={val.name}
                className={val.icon}
                style={{ fontSize: "17vh" }}
              />
              <Typography variant="caption">{val.name}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container justify="space-evenly" className={classes.root}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container justify="center" className={classes.headingPadding}>
            <Typography variant="h3" component="h2" gutterBottom>
              Projects
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src={xlpat}
                />
              }
              title="Xlpat"
              subheader="January 1, 2017"
            />
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="190"
              image={xlpatBanner}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Xlpat
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Xlpat provides a platform for patent search, idea novelty
                checker, competitive analysis, infringement search and prior art
                research etc.
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://www.xlpat.com/" target="_blank">
                <Button variant="contained" size="small" color="primary">
                  View Website
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src={xlpat}
                />
              }
              title="Novelty Checker"
              subheader="April 14, 2018"
            />
            <CardMedia
              component="img"
              alt="Novelty Checker"
              height="190"
              image={noveltyBanner}
              title="Novelty Checker"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Novelty Checker
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Novelty Checker is an intelligent, secure and easy to use
                tool that quickly verifies the novelty of your idea.
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://en.xlpat.com/novelty-checker/" target="_blank">
                <Button variant="contained" size="small" color="primary">
                  View Website
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src={stackabl}
                />
              }
              title="Stackabl"
              subheader="May 14, 2019"
            />
            <CardMedia
              component="img"
              alt="Stackabl"
              height="190"
              image={stackablBanner}
              title="Stackabl"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Stackabl
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Stackabl is a next generation, virtual development environment.
                With this tool you have the freedom to create unlimited websites
                with just 1-Click.
              </Typography>
            </CardContent>
            <CardActions>
              <a href="http://stackabl.io/" target="_blank">
                <Button variant="contained" size="small" color="primary">
                  View Website
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container justify="space-between" className={classes.root}>
        <Grid item lg={8} md={8} sm={8} xs={12}>
          <Grid container className={classes.gridItem}>
            <Typography variant="h3" component="h2" gutterBottom>
              Reach Out to me!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
            </Typography>
            <Typography variant="h5" gutterBottom>
              Aspiring Software Developer | Crypoto Enthusiast | Stock Trader |
              Data Enthusiast | Anime
            </Typography>

            <Grid container direction="row" style={{ marginTop: "2vh" }}>
              <Icon className="fa fa-map-marker-alt"></Icon>
              <Typography variant="subtitle1">Punjab, India</Typography>
            </Grid>
            <Grid container direction="row" style={{ marginTop: "2vh" }}>
              <SocialIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Grid container justify="center">
            <Avatar className={classes.avtar} src={me} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
