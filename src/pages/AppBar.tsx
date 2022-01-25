import React, {useReducer, useEffect, useState, Suspense} from 'react'
import {appReducer} from '../reducers/action';
import {themeModel} from '../reducers/action-type/theme';
import {StateContext, ThemeContext} from '../contexts/contexts';
import HeaderBar from '../components/AppBar/HeaderBar';
import {Outlet} from 'react-router-dom';
import FooterBar from '../components/AppBar/FooterBar';

const AppBar = () => {
    const [stateValue, dispatchValue] = useReducer(appReducer, {user: '', post: [], error: ''});
    const [theme, setTheme] = useState<themeModel>({primaryColor: 'deepskyblue', secondaryColor: 'coral'});
    const {user} = stateValue;

    useEffect(() => {
        if (user) {
            document.title = `${user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [user])

    return (
        <StateContext.Provider value={{state: stateValue, dispatch: dispatchValue}}>
            <ThemeContext.Provider value={theme}>
                <div style={{padding: 20}}>
                 <HeaderBar setTheme={setTheme} />
                    <hr/>
                    <Outlet/>
                    <FooterBar/>
                </div>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}
export default AppBar;
