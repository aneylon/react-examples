import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Header from './components/Header'
import Route from './components/Route'
import Search from './components/Search'
import Translate from './components/Translate'

export default () => {
  const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropdown] = useState(true)
  
  return (
    <div>
    <Header />
    <Route path="/">
      <Accordion items={items} />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
    <Route path="/translate">
      <Translate />
    </Route>
    <Route path="/dropdown">
      <Dropdown
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />
    </Route>
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