import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Username from './username';
import Password from './password';
import SubmitButton from './button';

export default class Login extends React.Component {
    render() {
        return (  <>
            {['dark',
            ].map((variant) => (
              <Alert key={variant} variant={variant}>
                Login <br></br><br></br>
                <Username/>
                <Password/>
                <SubmitButton/>
              </Alert>
            ))}
          </>

  );

        }  }           

