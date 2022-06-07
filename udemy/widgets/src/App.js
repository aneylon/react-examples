import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'
import Translate from './components/Translate'

export default () => {
  // const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      { showDropdown ? 
      <Dropdown onSelectedChange={setSelected} selected={selected} options={options}/>
      : null
      } */}
      <Translate />
    </div>
  )
}

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },{
    label: 'The Color Green',
    value: 'green'
  },{
    label: 'The Color Blue',
    value: 'blue'
  }
]

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