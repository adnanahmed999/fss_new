import React from 'react'
import Widget from 'rasa-webchat';

// not working. Chatbot code is in index.html
const RasaChatbot = () => {
  return (
    <Widget
      initPayload={"/get_started"}
      socketUrl={"http://localhost:5055"}
      socketPath={"/socket.io/"}
      // customData={{"language": "en"}} 
      // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"DSAbot"}
    />
  )
}

export default RasaChatbot