import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import Button from "../../components/CustomButtons/Button";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "../../styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle";

const useStyles = makeStyles(styles);
export default function SectionLogin() {
  // const [density, setDensity] = useState<number>(0);
  // const [temperature, setTemperature] = useState<number>(0);
  // const [pressure, setPressure] = useState<number>(0);
  // const [specificHeat, setSpecificHeat] = useState<number>(0);
  // const [divergentLength, setDivergentLength] = useState<number>(0);
  // const [particleSize, setParticleSize] = useState<number>(0);
  // const [thermalConductivity, setThermalConductivity] = useState<number>(0);
  // const data = {
  //   density: density,
  //   temperature: temperature,
  //   pressure: pressure,
  //   specificHeat: specificHeat,
  //   divergentLength: divergentLength,
  //   particleSize: particleSize,
  //   thermalConductivity: thermalConductivity,
  // };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <form className={classes.form}>
                <div>
                  <img src="/img/coeposter.jpg" className={classes.poster} />
                </div>
                <div>
                  <p className={classes.divider}>Cold Spray Meter</p>
                  <CardBody>
                    <CustomInput
                      labelText="Density (kg/m^3)"
                      id="density"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Specific Heat (J/kg.K)"
                      id="second"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Thermal Conductivity  (W/m.K)"
                      id="third"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Particle Size (µm)"
                      id="third"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Particle Pressure (bar)"
                      id="third"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Particle Temperature (°C)"
                      id="third"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Divergent Lenght (mm)"
                      id="third"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      // onClick={handleOnSubmit}
                    >
                      Calculate
                    </Button>
                  </CardFooter>
                </div>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
