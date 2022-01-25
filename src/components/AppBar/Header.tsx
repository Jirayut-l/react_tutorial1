import React, { useContext } from 'react'
import {ThemeContext} from '../../contexts/contexts';

const Header = ({text}:{text:string}) => {
  const {primaryColor} = useContext(ThemeContext);
  return(
   <h1 style={{color:primaryColor}}>
     {text}
   </h1>
  )
}
export  default  Header;
