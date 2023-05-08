import React from 'react';

import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import { styles } from './styles';
import useUserForm from './useUserForm';

import { ImageInput } from '@/components';

const UserForm = () => {
  const { initialValues, isLoading, onSubmit } = useUserForm();
  return (
    <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
      {({ dirty }) => (
        <Form>
          <Field type="file" name="picture" component={ImageInput} placeholder="Avatar" />
          <Button variant="contained" type="submit" disabled={!dirty || isLoading} sx={styles.btn}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
