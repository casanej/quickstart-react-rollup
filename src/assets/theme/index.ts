import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { PalletModel, darkTheme, lightTheme, ThemePatternPallet, colors } from './pallets';

export * from './pallets'

declare module 'styled-components' {
    export interface DefaultTheme {
        pallet: ThemePatternPallet;
        currentPallet: PalletModel;
        colors: typeof colors
    }
}

interface GlobalStyleProps {
    readonly theme: PalletModel;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${props => props.theme.currentPallet.background.primary};
        color: ${props => props.theme.currentPallet.text.primary};
        font-family: sans-serif;

        width: 100%;
        height: 100vh;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;

        &:hover {
            text-decoration: underline;
        }

        &:active {
            text-decoration: none;
        }
    }

    #root {
        height: 100vh;
        width: 100vw;
        position: relative;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

export const theme = {
    pallet: {
        light: lightTheme,
        dark: darkTheme
    },
    currentPallet: darkTheme,
    colors
} as DefaultTheme
