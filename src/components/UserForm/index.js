import { Formik, Form, Field } from "formik";
import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as ActionUserCreators from "../../actions/userCreators";

const UserForm = () => {
  const {createUserRequest} = bindActionCreators(
    ActionUserCreators,
    useDispatch()
  );
  const onSubmit = (values, formikBag) => {
    createUserRequest({ values });
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        login: "",
        email: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="login" placeholder="login" />
        <Field name="email" placeholder="email" />
        <Field name="password" placeholder="password" />
        <input type="submit" value="Add user" />
      </Form>
    </Formik>
  );
};

export default UserForm;
