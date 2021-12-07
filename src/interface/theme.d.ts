export interface Color{
    blue: string,
    green: string,
    red: string,
    gray: string,
    grayLight: string,
    black: string,
    white: string,
    bg: string
}

export interface Margin{
    container: {
        min: number,
        max: number
    }
}

export default interface Theme{
    theme: {
        colors: Color,
        margin: Margin
    }
}