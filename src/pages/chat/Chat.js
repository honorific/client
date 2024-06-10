import {lazy} from 'react'
import Message from '../../components/message/Message'
import Rightbar from '../../components/rightbar/Rightbar'
import SendMessage from '../../components/sendMessage/SendMessage'
import {StyledChat} from './Chat.styles'
const ChatBox = lazy(() => import('../../components/chatBox/ChatBox.js'))

const Chat = () => {
  return (
    <StyledChat>
      <div className='rightbarContainer'>
        <Rightbar />
      </div>
      <div className='main'>
        <Message
          own={true}
          message={{username: 'ali', text: 'hello', time: '1 min ago'}}
        />
        <Message
          message={{username: 'reza', text: 'hello world', time: 'just now'}}
        />
        <Message
          message={{username: 'sara', text: 'hi', time: 'just now'}}
          last={true}
        />
        <SendMessage />
        <ChatBox />
      </div>
    </StyledChat>
  )
}

export default Chat
