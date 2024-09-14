import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../../../Token_frontend/main.css";
import { AuthClient } from "@dfinity/auth-client";

const init = async () => {

  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) handleAuthenticated();
  else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => { handleAuthenticated(authClient); }
    })
  }
}

async function handleAuthenticated(authClient) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
init();

