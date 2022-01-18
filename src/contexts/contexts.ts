import React  from 'react'
import {ContextPropsType} from '../reducers/action-type/Context';
import {themeModel} from '../reducers/action-type/theme';

export const StateContext = React.createContext<ContextPropsType>({state: {user :'',post:[]}, dispatch:() => {} });
export const ThemeContext = React.createContext<themeModel>({primaryColor: 'deepskyblue', secondaryColor: 'coral'})
