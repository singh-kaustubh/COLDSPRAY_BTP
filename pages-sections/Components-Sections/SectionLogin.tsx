import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import Button from "../../components/CustomButtons/Button";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "../../styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle";
import SnackbarContent from "../../components/Snackbar/SnackbarContent";

const useStyles = makeStyles(styles);

type ModelOutput = {
  predictionvel: number;
  predictiontemp: number;
};

export default function SectionLogin() {
  const [density, setDensity] = useState<number>();
  const [temperature, setTemperature] = useState<number>();
  const [pressure, setPressure] = useState<number>();
  const [specificHeat, setSpecificHeat] = useState<number>();
  const [thermalConductivity, setThermalConductivity] = useState<number>();
  const [particleSize, setParticleSize] = useState<number>();
  const [divergentLength, setDivergentLength] = useState<number>();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const input = {
      SpecificHeat: specificHeat,
      ThConductivity: thermalConductivity,
      Density: density,
      ParticleSize: particleSize,
      Pressure: pressure,
      Temperature: temperature,
      DivergentLength: divergentLength,
    };
    const response = await axios.post<ModelOutput>("/api/callModel", input);

    window.alert(
      `Velocity:${response.data.predictionvel.toPrecision(
        6
      )} m/s and Temperature:${response.data.predictiontemp.toPrecision(6)} K`
    );
  };
  const handleChange = (e: {
    target: { name: string; value: React.SetStateAction<number | undefined> };
  }) => {
    if (e.target.name == "density") {
      setDensity(e.target.value);
    } else if (e.target.name == "temperature") {
      setTemperature(e.target.value);
    } else if (e.target.name == "pressure") {
      setPressure(e.target.value);
    } else if (e.target.name == "thermalConductivity") {
      setThermalConductivity(e.target.value);
    } else if (e.target.name == "particleSize") {
      setParticleSize(e.target.value);
    } else if (e.target.name == "divergentLength") {
      setDivergentLength(e.target.value);
    } else if (e.target.name == "specificHeat") {
      setSpecificHeat(e.target.value);
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <SnackbarContent
        message={"Hi this is a message"}
        color="info"
        close={true}
        className={classes.snackBar}
      ></SnackbarContent>
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
                      name="density"
                      onChange={handleChange}
                      value={density}
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
                      id="specificHeat"
                      name="specificHeat"
                      onChange={handleChange}
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
                      id="thermalConductivity"
                      name="thermalConductivity"
                      onChange={handleChange}
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
                      id="particleSize"
                      name="particleSize"
                      onChange={handleChange}
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
                      id="pressure"
                      name="pressure"
                      onChange={handleChange}
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
                      id="temperature"
                      name="temperature"
                      onChange={handleChange}
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
                      id="divergentLength"
                      name="divergentLength"
                      onChange={handleChange}
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
                    <Button simple color="primary" size="lg">
                      <div onClick={handleSubmit}>Calculate</div>
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
