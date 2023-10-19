import React from 'react'
import Button from '@mui/material/Button';
import {FaGreaterThan} from "react-icons/fa"

const SingleButton = ({item}) => {
   const {title,url} = item;
  return (
    <Button variant="contained" className={`text-[#000000] hover:text-white ${url == "/all" && `bg-[#CD2D4A]` }`}>
      {title} {url == "/all" && <FaGreaterThan/>}
    </Button>
  )
}

export default SingleButton