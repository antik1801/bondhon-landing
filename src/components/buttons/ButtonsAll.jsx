import React from 'react'
import Buttons from './Buttons'
import {FaGreaterThan} from "react-icons/fa"

const allButtons = [
    {
        id: 1,
        title: 'গবেষণামূলক প্রকল্প',
        color: '#E5E7EB',
        icon: null,
        text: '#000000'
    },
    {
        id: 2,
        title: 'মূল রচনা',
        color: '#4852AE',
        icon: null,
        text: '#ffffff'
    },
    {
        id: 3,
        title: 'ফোকাস',
        color: '#E5E7EB',
        icon: null,
        text: '#000000'
    },
    {
        id: 4,
        title: 'নির্মাণ তথ্য',
        color: '#E5E7EB',
        icon: null,
        text: '#000000'
    },
    {
        id: 5,
        title: 'স্পটলাইট',
        color: '#E5E7EB',
        icon: null,
        text: '#000000'
    },
    {
        id: 6,
        title: 'নির্মাণ উপকরণ',
        color: '#E5E7EB',
        icon: null,
        text: '#000000'
    },
    {
        id: 7,
        title: 'রঙ্গিন ঘরের গল্প',
        color: '#E5E7EB',
        icon: null,
        text: '#000000'
    },
    {
        id: 8,
        title: 'নির্মাণে এগিয়ে চলছে বিশ্ব',
        color: '#E5E7EB',
        icon: '',
        text: '#000000'
    },
    {
        id: 9,
        title: 'সকল ক্যাটাগরি',
        color: '#CD2D4A',
        icon: 'FaGreaterThan',
        text: '#ffffff'
    }
]

const ButtonsAll = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-[16px]'>
        {
            allButtons.map(({id,title,color, icon, text}) =><Buttons key={id} title={title} color={color} icon={icon} text={text}/>)
        }
    </div>
  )
}

export default ButtonsAll