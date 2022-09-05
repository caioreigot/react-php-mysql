import styled from "styled-components";

const StyledSendMessage = styled.input`
  width: 100%;
  min-height: 60px;
  
  border: 2px solid var(--light-blue);
  border-radius: 20px;
  
  background-color: transparent;
  color: var(--white);

  font-size: 1.2rem;
  padding: 0 20px;

  :focus {
    outline: none;
    border-color: var(--white);
  }

  ::placeholder {
    color: #c2c2c2;
  }
`;

export { StyledSendMessage };