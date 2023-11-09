import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
    --light-green: #E9EDC9;
    --dark-green: #CCD5AE;
    --brown: #D4A373;
    --light-brown: #FAEDCD;
}

html{
    scroll-behavior: smooth;
}
body{
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif;
    text-decoration: none;
}
`