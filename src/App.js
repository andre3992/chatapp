import React from 'react';
import './App.css';
import Chat from './Chat';
import UserList from './UserList';
import Login from './Login';
import chatkitLogo from './chatkit-logo.svg';
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';


const instanceLocator = 'v1:us1:2fd9a67a-89b7-468e-af51-633af385e3fe';
const tokenProvider = new TokenProvider({
  url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2fd9a67a-89b7-468e-af51-633af385e3fe/token',
});

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const otherUserId = urlParams.get('otherUserId');

  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
            <ChatkitProvider
              instanceLocator={instanceLocator}
              tokenProvider={tokenProvider}
              userId={userId}
            >
              <UserList userId={userId}/>
              <Chat otherUserId={otherUserId} />
            </ChatkitProvider>
          </div>
        </>
      ) : (
        <Login />
      )}
      <div className="App__backdrop">
        <img
          className="App__backdrop__logo"
          src={chatkitLogo}
          alt="Chatkit logo"
        />
      </div>
    </div>
  );
}

export default App;

