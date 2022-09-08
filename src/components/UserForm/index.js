import { Formik, Form, Field } from "formik";
import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as ActionUserCreators from "../../actions/userCreators";

const UserForm = (props) => {
  const { createUserRequest } = bindActionCreators(
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
        imgPath: "",
      }}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form encType="multipart/form-data">
          <Field name="login" placeholder="login" />
          <Field name="email" placeholder="email" />
          <Field name="password" placeholder="password" type="password" />
          <input
            name="imgPath"
            placeholder="imgPath"
            type="file"
            onChange={({ target }) =>
              formikProps.setFieldValue("imgPath", target.files[0])
            }
          />
          <input type="submit" value="Add user" />
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
