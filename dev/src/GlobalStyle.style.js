import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    font-family: 'Ubuntu', 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
    color: var(--white);
    background-color: var(--dark-blue);
  }

  body, #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #root {
    justify-content: start;
    padding: 20px 0;
    width: clamp(350px, 80%, 500px);
  }

  :root {
    --white: #edeef9;
    --dark-blue: #0f132e;
    --light-blue: #536d88;
  }
`;

export default GlobalStyle;