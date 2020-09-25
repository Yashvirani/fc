import React from 'react';
import { Avatar,Icon } from '@material-ui/core';
import './SidebarRow.css';

function SidebarRow({title,src,Icon}){
  return(
    <div className='sidebarRow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;

                  // or

//function SidebarRow({title}){
//  return(
//    <div className='sidebarRow'>
//      <p>{title}</p>
//    </div>
//  );
//}

//export default SidebarRow;

     //using object destructuring in second one
