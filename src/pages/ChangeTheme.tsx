import {themeModel} from '../reducers/action-type/AppBar';
import React from 'react';

const themeList: themeModel[] = [
    {primaryColor: 'deepskyblue', secondaryColor: 'coral'},
    {primaryColor: 'orchid', secondaryColor: 'mediumseagreen'}
]

function ThemeItem({theme, active, onClick}: { theme: themeModel, active: boolean, onClick: React.Dispatch<React.SetStateAction<themeModel>> }) {
    return (
        <span onClick={() => onClick(theme)} style={{cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal'}}>
            <span style={{color: theme.primaryColor}}>Primary</span> /
            <span style={{color: theme.secondaryColor}}>Secondary</span>
        </span>
    )
}

const ChangeTheme = ({theme, setTheme}: { theme: themeModel, setTheme: React.Dispatch<React.SetStateAction<themeModel>> }) => {
    function isActive(themeValue: themeModel) {
        return themeValue.primaryColor === theme.primaryColor && themeValue.secondaryColor === theme.secondaryColor
    }

    return (
        <>
            Change theme:
            {themeList.map((value, index) =>
                <ThemeItem key={`theme-${index}`} theme={value} active={isActive(value)} onClick={() => setTheme(value)}/>
            )}
        </>
    )
}

export default ChangeTheme;
