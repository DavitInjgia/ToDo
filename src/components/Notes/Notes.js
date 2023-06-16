import React from 'react'
import NotesTemplate from './NotesTemplate'
import Image from './components/Image/Image';
import Cards from './components/Cards/Cards'
function Notes() {
  return (
    <NotesTemplate image = {<Image/>} cards = {<Cards/>}/>
  )
}

export default Notes
