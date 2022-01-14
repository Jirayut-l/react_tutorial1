import React from 'react'
import {themeModel} from '../reducers/action-type/AppBar';

// export  const  StateContext = React.createContext()
export  const ThemeContext = React.createContext<themeModel>({primaryColor: 'deepskyblue', secondaryColor: 'coral'})
