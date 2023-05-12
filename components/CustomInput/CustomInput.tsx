import React, { ReactNode } from "react";
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import styles from "../../styles/jss/nextjs-material-kit/components/customInputStyle";

const useStyles = makeStyles(styles);

export default function CustomInput(props: CustomInputProps) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    value,
    labelProps,
    inputProps,
    onChange,
    error,
    name,
    white,
    inputRootCustomClasses,
    success,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        required={true}
        value={value}
        onChange={onChange}
        name={name}
        {...inputProps}
      />
    </FormControl>
  );
}

export interface CustomInputProps {
  labelText?: string;
  labelProps?: any;
  id?: string;
  inputProps?: any;
  formControlProps?: any;
  inputRootCustomClasses?: string;
  error?: boolean;
  value?: number;
  success?: boolean;
  white?: boolean;
  onChange?: Function;
  name?: string;
}
