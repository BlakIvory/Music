import React from 'react'
import  icons  from '../ultis/icons'

const {BiSearch} = icons


const Search = () => {
  return (
    <div className='w-full flex bg-[#DDE4E4] items-center rounded-[20px]'>
      <span className='h-10 px-4 flex justify-center items-center'>
        <BiSearch size={24} />
      </span>
      <input
      type='text'
      className='outline-none w-full bg-[#DDE4E4]  px-4 py-2 rounded-[20px] h-10 text-gray-500'
      placeholder=' Tìm kiếm bài hát, nghệ sĩ , lời bài hát ,...'
      />
    </div>
  )
}

export default Search
