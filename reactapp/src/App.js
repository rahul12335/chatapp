import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'a1dad3f5-1e69-4d6e-90b4-d28b44d94313';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
    height='100vh'
    userName='rahuldeveloper'
    userSecret='123123'
    projectID='a1dad3f5-1e69-4d6e-90b4-d28b44d94313'
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  
  />
  );
};

// infinite scroll, logout, more customizations...

export default App;