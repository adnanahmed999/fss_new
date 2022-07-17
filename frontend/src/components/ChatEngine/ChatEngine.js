import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import './chat.css';
import Header from "../Header"

const projectID = 'cf6c0fb2-dfd5-4871-8d5d-0abb95fec3a3';

const ChatSystem = () => {
    if (!localStorage.getItem('username')) return (
        <>
            <Header />
            <LoginForm />
        </>);

    return (
        <>
            <Header />
            <br /><br /><br />
            <ChatEngine
                height="100vh"
                projectID={projectID}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            /></>
    );
};

// infinite scroll, logout, more customizations...

export default ChatSystem;
