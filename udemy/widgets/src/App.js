import React from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown />
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