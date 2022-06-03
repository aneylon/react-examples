import React from 'react'
import Accordion from './components/Accordion'

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}


const items = [
  {
    title: 'one',
    content: 'two'
  },
  {
    title: 'three',
    content: 'four'
  },
  {
    title: 'five',
    content: 'six'
  },
]