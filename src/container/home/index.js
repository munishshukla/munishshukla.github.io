import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Button,
  Hidden,
  Avatar,
  Grow,
  IconButton,
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

import SocialIcon from "../../component/social-media/index";
import banner from "../../resources/home.svg";
import me from "../../resources/me.jpg";
import xlpat from "../../resources/xlpat.jpg";
import stackabl from "../../resources/stackabl.jpg";
import lpu from "../../resources/lpu.jpg";

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
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <Grid item lg={8} md={8} sm={8} xs={12} className={classes.gridItem}>
          <Grow in>
            <Paper className={classes.paper}>
              <Typography variant="h3" component="h2" gutterBottom>
                Hi all i'm Munish
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <SocialIcon />
              <section>
                <Button variant="contained" color="primary" size="large">
                  Primary
                </Button>
              </section>
            </Paper>
          </Grow>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          <Hidden only={["xs"]}>
            <img
              src={banner}
              alt="Munish Shukla"
              width="40%"
              height="inherit"
            />
          </Hidden>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.root}>
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
                    style={{textTransform: 'none'}}
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
                    style={{textTransform: 'none'}}
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
                    style={{textTransform: 'none'}}
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
                    style={{textTransform: 'none'}}
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

      <Grid container justify="space-between" className={classes.root}>
        <Grid item lg={8} md={8} sm={8} xs={12}>
          <Grid container className={classes.gridItem}>
            <Typography variant="h3" component="h2" gutterBottom>
              Reach Out to me!
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <SocialIcon />
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
