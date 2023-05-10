/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components

import Button from "../CustomButtons/Button";
import styles from "../../styles/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://mech.iitrpr.ac.in/faculty-profiles-detailed/harpreet-singh"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fa-light fa-user"} />
          Supervisor
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://mech.iitrpr.ac.in/research/research-labs"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fa fa-rss"} />
          Parent Laboratories
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>
    </List>
  );
}
