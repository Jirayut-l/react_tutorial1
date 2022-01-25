import React, {Dispatch, Suspense, useContext} from 'react';
import {themeModel} from '../../reducers/action-type/theme';
import Header from './Header';
import ChangeTheme from '../../pages/ChangeTheme';
import {StateContext, ThemeContext} from '../../contexts/contexts';
import UserBar from '../../pages/UserBar';
import CreatePost from '../../pages/post/CreatePost';

const HeaderBar = ({setTheme}: { setTheme: Dispatch<themeModel> }) => {
    const theme = useContext(ThemeContext);
    const {state} = useContext(StateContext);
    const {user} = state;
    return (
        <>
            <Header text={'React Hook Blog'}/>
            <ChangeTheme theme={theme} setTheme={setTheme}/>
            <br/>
            <Suspense fallback={<h3>Loading...</h3>}>
                <UserBar/>
            </Suspense>
            <h5> {JSON.stringify(state.post)} </h5>
            <br/>
            {user && <CreatePost/>}
        </>
    )
}

export default HeaderBar;
