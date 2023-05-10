/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../styles/jss/nextjs-material-kit/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props: FooterProps) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block}>Creative Team</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block}>About us</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block}>Blog</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block}>Licenses</a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.linkedin.com/in/kaustubh-singh-19573a1a6/"
            className={aClasses}
            target="_blank"
          >
            Kaustubh
          </a>
          {", "}
          <a
            href="https://www.linkedin.com/in/khushimalviya/"
            className={aClasses}
            target="_blank"
          >
            Khushi
          </a>
          {", "}
          <a
            href="https://www.linkedin.com/in/pranshu-mehra/"
            className={aClasses}
            target="_blank"
          >
            Pranshu
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

export interface FooterProps {
  whiteFont?: boolean;
}
