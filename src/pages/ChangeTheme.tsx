import {themeModel} from '../reducers/action-type/theme';
import React, {Dispatch, useEffect} from 'react';
import {useResource} from 'react-request-hook';
import {apiGetThemes} from '../Api/api';

const ThemeItem = ({theme, active, onClick}: { theme: themeModel, active: boolean, onClick: Dispatch<themeModel> }) => {
    return (
        <span onClick={() => onClick(theme)} style={{cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal'}}>
            <span style={{color: theme.primaryColor}}>Primary</span> /
            <span style={{color: theme.secondaryColor}}>Secondary</span>
        </span>
    )
}

const ChangeTheme = ({theme, setTheme}: { theme: themeModel, setTheme: Dispatch<themeModel> }) => {

    const [themes, getThemes] = useResource(apiGetThemes);
    useEffect(() => {
        getThemes()
    }, [])

    const isActive = (themeValue: themeModel) => {
        return themeValue.primaryColor === theme.primaryColor && themeValue.secondaryColor === theme.secondaryColor
    }
    return (
        <>
            Change theme:
            {themes.isLoading && ' Loading themes...'}
            {themes?.data?.map((value, index) =>
                <ThemeItem key={`theme-${index}`} theme={value} active={isActive(value)} onClick={() => setTheme(value)}/>
            )}
        </>
    )
}

export default ChangeTheme;
