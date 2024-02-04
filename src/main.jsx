import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-xjncc0e0nteh0ocp.us.auth0.com"
    clientId="rMpemc8tYvCcarriJ1xZeVxJ1I1e1QrR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);