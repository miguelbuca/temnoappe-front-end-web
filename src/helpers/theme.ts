import { Color, Margin } from "../interface/theme"

const colors: Color = {
    blue: '#598df4',
    green: '#0e9f6e',
    red: '#c81e1e',
    gray: '#f2f2f2',
    grayLight: '#f9fafb',
    black: '#1f2937',
    bg: '#f9fafb',
    white: '#fff'
}

const marins: Margin = {
    container: {
        max: 3,
        min: 1
    }
}

const theme =  {
    colors,
    marins
}

export default theme