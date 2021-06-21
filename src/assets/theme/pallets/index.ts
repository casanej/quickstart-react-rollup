export * from './dark'
export * from './light'
export * from './colors'

export type PalletsType = 'light' | 'dark';

export interface ThemePatternPallet {
    light: PalletModel;
    dark: PalletModel;
}

export interface PalletModel {
    text: {
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        info: string;
        light: string;
        dark: string;
    };
    background: {
        primary: string;
    };
    button: {
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        info: string;
        light: string;
        dark: string;
    }
}