import { createGlobalStyle } from 'styled-components';
createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');`

export const fonts = {
    font_base: `Open Sans, sans-serif`,
    font_alt: `Merriweather, serif`
}

export const colors = {
    color_white: `#F0F1F1`,
    color_gray: `#737373`,
    color_yellow: `#FAD648`,
    color_dark_gray: `#3C3C3C`,
    color_bronze: `#5E5322`
}