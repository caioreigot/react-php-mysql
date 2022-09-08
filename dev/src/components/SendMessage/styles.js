import styled from "styled-components";

const StyledSendMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  input:nth-of-type(1) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  input:nth-of-type(2) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 60px;

  margin: 2px 0;
  
  border: 2px solid var(--light-blue);
  border-radius: 8px;
  
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

const StyledSendButton = styled.button`
  height: 60px;
  width: 45px;

  font-size: 24px;
  background-color: var(--light-blue);

  border: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  :hover {
    cursor: pointer;
    background-color: #7194b8;
  }
`;

export {
  StyledSendMessage,
  StyledInput,
  StyledSendButton
};