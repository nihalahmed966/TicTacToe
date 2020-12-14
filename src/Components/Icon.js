import React from 'react'
import {FaTimes,FaRegCircle,FaPen} from 'react-icons/fa';
function Icon({name}) {
   switch (name) {
       case 'cross':
           return <FaTimes className="icons"/>
        case 'circle' :
        return <FaRegCircle className="icons"/>
        default :
        return <FaPen className="icons"/>
   }
}

export default Icon