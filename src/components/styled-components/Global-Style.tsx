import { createGlobalStyle } from 'styled-components';

//  Global styles of whole app
const GlobalStyle = createGlobalStyle`
  body {
	padding: 0;
    margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    	Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
   }

  *{
    box-sizing: border-box;
  }

  #nprogress .bar {
    z-index: 9999;
  }
`;

export default GlobalStyle;
