import React, {useState, useContext, useSelector } from "react";
import { ActionCableContext } from "../root";


const MessageList = (() => {
        const cable = useContext(ActionCableContext)
        const [channel, setChannel] = useState(null)

        //might go here
        React.useEffect(() => {
            //const { channelId } = useParams()
            const channel = cable.subscription.create({
                channel: 'testChannel',
                id: channelId
            })
            setChannel(channel)
            return () => {
                channel.unsubscribe()
            }
            }, [channelId])
        sendMessage = (content) => {
            const data = { channelId, currentUserId, content }
            channel.send(data)
        }
        

        
        return(
            <div>
                {renderedMessages}
            </div>
        )
    })

export default MessageList