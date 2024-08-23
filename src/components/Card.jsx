import React from 'react'
import Posts from './Posts'
import './card.css'

export function Card() {


  return (
    <div className='main-container'>
      {
        Posts.map(({ id, type,title, text, views, messages, avatar, name }) => (
          <div key={id} className='card'>
            <i className="bi bi-chat-square-quote"></i>
            <h4 className='type'>{type}</h4>
            <h2 className='title'>{title}</h2>
            <p className='text'>{text}</p>
            <div className='socials'>
            <span className='views'><i class="bi bi-eye-fill"></i> {views}</span>
            <span className='messages'><i class="bi bi-chat-left-fill"></i> {messages}</span>
            </div>
            <div className='img-container'><img src={avatar} alt={name} className='avatar'/></div>
          </div>
        ))
      }
    </div>
  )
}
