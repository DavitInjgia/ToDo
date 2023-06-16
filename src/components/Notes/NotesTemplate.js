import React from 'react'
import './NotesTemplate.css'
function NotesTemplate(props) {
  return (
    <div className="notes-card">
      {props.image}
      {props.cards}
    </div>
  )
}

export default NotesTemplate
