import React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { Form, Formik, Field } from 'formik';

import { schema } from './schema';
import styles from './styles';
import useEmailSignInForm from './useEmailSignInForm';

import { EmailInput, PasswordInput } from '@/components';

const EmailSignInForm = () => {
  const { onSubmit } = useEmailSignInForm();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Typography variant="h3">Sign In</Typography>
          <Grid container mt={3}>
            <Field
              type="email"
              name="email"
              autoComplete="email"
              fullWidth
              component={EmailInput}
            />
            <Field
              type="password"
              name="password"
              autoComplete="password"
              fullWidth
              component={PasswordInput}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
              size="large"
              sx={styles.btn}
            >
              Sign In
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EmailSignInForm;
