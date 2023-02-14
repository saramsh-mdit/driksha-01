import React from 'react'
import { TextInput } from '@mantine/core'
import { Icon } from '@iconify/react';

const Search = () => {
  
  const [searchText,setSearchText] = React.useState<string>();

  const onKeyboardHandler = (e:KeyboardEventHandler) => {
  if(e.key!=="Enter") return
  console.log(searchText)
}
  return (
    <div className='max-w-xl w-full mx-auto mt-4'>
      <TextInput
      onChange={(e)=>setSearchText(e.target.value)}
      onKeyDown={onKeyboardHandler}
      rightSection={<Icon className="text-xl" icon="ic:round-search" />}
      placeholder='Search Here' />
    </div>
  )
}

export default Search