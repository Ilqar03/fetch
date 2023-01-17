import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

function LogIn() {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <NavLink to="/">Product</NavLink>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          text: Yup.string()
            ,
        })}
        onSubmit={(values) => {

          /// fakestora post atmaq olmur deye api deyisdirdik

          axios.post("https://northwind.vercel.app/api/categories", {
            name: values.text,
          });
        }}
      >
        <Form>
          <label htmlFor="text">Email Address</label>
          <Field name="text" type="text" />
          <ErrorMessage name="text" />

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
}

export default LogIn;
