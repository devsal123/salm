import React from 'react'
import './MessageBox.css'

const MessageBox = (props) => {

  if(props.messageStatus){
    return (
      <div className="forty-five righted" id="cooltext-area">
        <div className="page-item_container fade">
          <div className="page-item">
            <h2>{ props.minfo }</h2>
          </div>
        </div>
      </div>
    )
  }
  else {
    return null
  }

}

export default MessageBox
