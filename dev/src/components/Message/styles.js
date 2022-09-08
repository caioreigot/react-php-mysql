import styled, { createGlobalStyle } from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;

  position: relative;
  
  width: 100%;
  min-height: 65px;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;

  margin-bottom: 5px;
  padding: 10px 40px 10px 10px;
  
  border: 1px solid var(--light-blue);
  border-radius: 0 10px 10px 10px;

  strong {
    width: 100%;
    min-height: 20px;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1.2rem;
    color: var(--light-blue);

    margin-bottom: 10px;
  }

  p {
    width: 100%;
    
    font-size: 1rem;
    word-wrap: break-word;
    
    color: var(--white);
  }

  i {
    position: absolute;
    right: 0;
    bottom: 0;

    transform: scale(150%);
    margin: 15px;

    color: var(--light-blue);

    :hover {
      cursor: pointer;
      filter: brightness(120%);
    }
  }
`;

const StyledNickname = styled.strong`
  color: ${props => props.nicknameColor} !important;
`;

export { 
  StyledMessage,
  StyledNickname
};