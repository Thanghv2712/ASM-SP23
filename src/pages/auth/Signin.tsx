import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../../schemas/auths';
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate = useNavigate();
  fetch("http://localhost:3000/auth")
        .then((Response) => Response.json())
        .then((data) =>  console.log(data))
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        
        if (values.email === 'user@example.com' && values.password === 'password') {
          alert('Login successful!');
          navigate('/admin');
        } else {
          alert('Login failed!');
        }
        setSubmitting(false);
      
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignIn