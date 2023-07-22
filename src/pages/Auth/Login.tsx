import { useUserLogin } from "@hooks/useUserLogin";
import store from "@lib/store";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import common from "@utils/common";
import { LoginUserQuery } from "@utils/interfaces";
import { useMainStyles } from "@utils/styles/mainStyles";
import { Formik } from "formik";
import React from "react";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
});

const Login = () => {
  const mainClasses = useMainStyles();

  const { isSuccess, data, mutate } = useUserLogin();
  const initialValues: LoginUserQuery = { email: "", password: "" };

  if (isSuccess) {
    store.setUserJWTToken(data.result.token);
    return <Navigate to={{ pathname: common.RouteUrls.Dashboard }}></Navigate>;
  }

  if (store.isUserAuthenticated()) {
    return <Navigate to={common.RouteUrls.BasePath} />;
  }

  return (
    <React.Fragment>
      <Box>
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Box className={mainClasses.formBoxGrid}>
              <Card sx={{ width: 400 }}>
                <form noValidate onSubmit={handleSubmit}>
                  <CardContent>
                    <FormGroup>
                      <TextField
                        size="small"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter email"
                        className="form-control inp_text"
                        id="email"
                      ></TextField>
                      <Typography>
                        {errors.email && touched.email && errors.email}
                      </Typography>
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        size="small"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter password"
                        className="form-control"
                      ></TextField>
                      <Typography>
                        {errors.password && touched.password && errors.password}
                      </Typography>
                    </FormGroup>
                    <Button type="submit">Login</Button>
                  </CardContent>
                </form>
              </Card>
            </Box>
          )}
        </Formik>
      </Box>
    </React.Fragment>
  );
};

export default Login;
