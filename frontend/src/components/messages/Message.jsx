import React from 'react'

const Message = () => {
  return (
    <div className='chat '>

        <div className='chat chat-start'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  alt='Tailwind css chat bubble component'/>
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>
            Fine
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>12:00 AM</div>
        </div>
    </div>
  )
}

export default Message



{/*
    import React from 'react'

const Message = () => {
  return (
    <div className='chat '>

        <div className='chat chat-start'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  alt='Tailwind css chat bubble component'/>
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>
            Fine
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>12:00 AM</div>
        </div>
    </div>
  )
}

export default Message */}