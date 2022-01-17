import React  ,{Dispatch} from 'react'
import {ContextPropsType, themeModel} from '../reducers/action-type/AppBar';


export const StateContext = React.createContext<ContextPropsType>({state: {user :'',post:[]}, dispatch:() => {} });
export const ThemeContext = React.createContext<themeModel>({primaryColor: 'deepskyblue', secondaryColor: 'coral'})
