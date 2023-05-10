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
  const [data, setData] = useState<object>({
    density: 0,
    temperature: 0,
    pressure: 0,
    specificHeat: 0,
    divergentLength: 0,
    particleSize: 0,
    thermalConductivity: 0,
  });
  const [finalOutput, setFinalOutput] = useState<object>({
    outVelocity: 0,
    outTemperature: 0,
  });
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.alert(
      `The predicted values are Velocity:${finalOutput.outVelocity} and Temperature:${finalOutput.outTemperature}`
    );
    // const res = await fetch("....");
    // const out = await res.json();
    // setFinalOutput({
    //   outVelocity: out.velocity,
    //   outTemperature: out.temperature,
    // });
    console.log("first", 2);
  };
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <form
                className={classes.form}
                onChange={onChange}
                onSubmit={handleSubmit}
              >
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
                        value: { data },
                      }}
                    />
                    <CustomInput
                      labelText="Specific Heat (J/kg.K)"
                      id="specificHeat"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                        value: { data },
                      }}
                    />
                    <CustomInput
                      labelText="Thermal Conductivity  (W/m.K)"
                      id="thermalConductivity"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                        value: { data },
                      }}
                    />
                    <CustomInput
                      labelText="Particle Size (µm)"
                      id="particleSize"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                        value: { data },
                      }}
                    />
                    <CustomInput
                      labelText="Particle Pressure (bar)"
                      id="pressure"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                        value: { data },
                      }}
                    />
                    <CustomInput
                      labelText="Particle Temperature (°C)"
                      id="temperature"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                        value: { data },
                      }}
                    />
                    <CustomInput
                      labelText="Divergent Lenght (mm)"
                      id="divergentLength"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off",
                        value: { data },
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
