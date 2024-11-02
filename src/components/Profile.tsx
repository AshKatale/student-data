import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function Profile() {
  return (
    <div className='flex items-center'>
      <img src='profilePhoto.png' className='h-14 w-14 rounded-full'/>
      <div className='flex items-center'>
        <h1 className='m-2'>Ashitosh Katale</h1>
        <IoIosArrowDown />
      </div>
    </div>
  )
}
