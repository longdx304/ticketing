import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const AuthForm = ({ title, url }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url,
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{title}</h1>
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary">{title}</button>
    </form>
  );
};

export default AuthForm;
