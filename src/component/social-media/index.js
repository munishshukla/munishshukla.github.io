import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function SocialIcon() {
  return (
    <section>
      <IconButton edge="start">
        <GitHubIcon />
      </IconButton>
      <IconButton edge="start">
        <TwitterIcon />
      </IconButton>
      <IconButton edge="start">
        <FacebookIcon />
      </IconButton>
      <IconButton edge="start">
        <LinkedInIcon />
      </IconButton>
      <IconButton edge="start">
        <InstagramIcon />
      </IconButton>
    </section>
  );
}
