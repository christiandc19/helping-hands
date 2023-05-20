import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content container'>
                <div className='address bar-box1'>
                    <p><span><MdLocationPin /></span> 1776 North Highland Ave, Los Angeles CA 90035</p>
                </div>

                <div className='email bar-box2'>
                    <p><span><FiMail /></span> info@contracosta.com</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone /></span> +1 (323) 792-0515</p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
