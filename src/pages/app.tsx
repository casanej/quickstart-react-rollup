import React, { ReactElement, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, PalletModel, PalletsType, theme } from 'assets';

export const App = (): ReactElement => {
    const [currentTheme, setCurrentTheme] = useState<PalletModel>(theme.pallet.dark);

    const changeTheme = (themeType: PalletsType) => {
        switch(themeType) {
        case 'dark': setCurrentTheme(theme.pallet.dark); break;
        case 'light': setCurrentTheme(theme.pallet.light); break;
        }
    }

    useEffect(() => {
        changeTheme('dark');
    }, [])

    return (
        <ThemeProvider theme={{...theme, ...{ currentTheme: currentTheme }}} >
            <GlobalStyle theme={currentTheme} />
            <div><h1>PROJETO QUICK STARTER</h1></div>
        </ThemeProvider>
    );
};
