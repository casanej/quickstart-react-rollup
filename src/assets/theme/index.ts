import { createGlobalStyle, ThemePattern } from 'styled-components';
import { PalletModel, darkTheme, lightTheme, ThemePatternPallet } from './pallets';

export * from './pallets'

declare module 'styled-components' {
    export interface ThemePattern {
        pallet: ThemePatternPallet;
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
        background-color: ${props => props.theme.background.primary};
        color: ${props => props.theme.text.primary};
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
    }
`

export const theme = {
    pallet: {
        light: lightTheme,
        dark: darkTheme
    }
} as ThemePattern
