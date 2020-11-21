import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Icon from "@material-ui/core/Icon";

export default function SocialIcon() {
  const openLink = (obj) => {
    var link = "";
    switch (obj) {
      case "github":
        link = "https://github.com/munishshukla";
        break;
      case "twitter":
        link = "https://twitter.com/TheMunishShukla";
        break;
      case "linkedin":
        link = "https://www.linkedin.com/in/munish-shukla-61489a93/";
        break;
      case "facebook":
        link = "https://www.facebook.com/munish.shukla.102";
        break;
      case "instagram":
        link = "https://www.instagram.com/themunishshukla/";
        break;
      case "quora":
        link = "https://www.quora.com/profile/Munish-Shukla-4";
        break;
      case "hackerrank":
        link = "https://www.hackerrank.com/munishz";
        break;
      case "blog":
        link = "https://codetweaks.wordpress.com/";
        break;
      case "gmail":
        window.location.href = `mailto:smunish170@gmail.com`;
        return;
      default:
        break;
    }

    if (link !== "") {
      window.open(link, "_blank");
    }
  };
  return (
    <section>
      <IconButton edge="start" onClick={openLink.bind(this, "github")}>
        <GitHubIcon />
      </IconButton>
      <IconButton edge="start" onClick={openLink.bind(this, "linkedin")}>
        <LinkedInIcon />
      </IconButton>
      <IconButton edge="start" onClick={openLink.bind(this, "twitter")}>
        <TwitterIcon />
      </IconButton>
      <IconButton edge="start" onClick={openLink.bind(this, "quora")}>
        <Icon className="fab fa-quora" />
      </IconButton>
      <IconButton edge="start" onClick={openLink.bind(this, "hackerrank")}>
        <Icon className="fab fa-hackerrank" />
      </IconButton>
      <IconButton edge="start" onClick={openLink.bind(this, "facebook")}>
        <FacebookIcon />
      </IconButton>
      <IconButton edge="start" onClick={openLink.bind(this, "instagram")}>
        <InstagramIcon />
      </IconButton>
      
      <IconButton edge="start" onClick={openLink.bind(this, "blog")}>
        <Icon className="fab fa-blogger-b" />
      </IconButton>
      <IconButton edge="start" onClick={openLink.bind(this, "gmail")}>
        <Icon className="fa fa-envelope" />
      </IconButton>
    </section>
  );
}
