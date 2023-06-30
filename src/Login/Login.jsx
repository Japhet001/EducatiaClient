import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './loginform.css';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Context } from '../userContext/Context';
import { apiDomain } from '../utils/utils';
import { yupResolver } from '@hookform/resolvers/yup';
export default function LoginForm() {

  const { dispatch } = useContext(Context);

  const navigate = useNavigate();

  const schema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    schema
      .validate(data)
      .then(() => {
        fetch(`${apiDomain}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Request failed.');
            }
          })
          .then((data) => {
            if (data.token) {
              dispatch({ type: 'LOGIN_SUCCESS', payload: data });
              navigate('/Courses');
            }
          })
          .catch((error) => {
            dispatch({ type: 'LOGIN_FAILURE' });
            alert(error.message);
          });
      })
      .catch((validationError) => {
        // Handle validation errors
        console.log(validationError);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
      <p className="loginBanner"> Login Page</p>
      <div>
        <input type="text" placeholder="Username" {...register('username')} />
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <input type="password" placeholder="Password..." {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>

      <input className="submitBtn" type="submit" value="Submit" />
    </form>
  );
}
