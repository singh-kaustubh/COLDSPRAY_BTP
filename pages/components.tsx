import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Parallax from "../components/Parallax/Parallax";
import SectionLogin from "../pages-sections/Components-Sections/SectionLogin";
import styles from "../styles/jss/nextjs-material-kit/pages/components";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Center of Excellence (CoE) for Degradation Resistant Thermal Spray Coatings"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <img src="/img/melogo.jpg" className={classes.rprlogo} />
              <img src="/img/yourlablogo.jpg" className={classes.yourlablogo} />
            </GridItem>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>YourLab Cold Spray Meter</h1>
                <h3 className={classes.subtitle}>
                  An applied machine learning tool to predict particle velocity
                  and temperature in Cold Spray Process
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.mainRaised)}>
        <SectionLogin />
      </div>
      <Footer />
    </div>
  );
}
