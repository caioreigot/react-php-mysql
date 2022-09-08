import styled from "styled-components";

const StyledMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;

  width: 100%;
  min-height: 100px;
  
  padding: 10px;
  margin-top: 10px;
  overflow-y: auto;

  border-radius: 10px;
  border: 2px dashed var(--light-blue);
`;

export { StyledMessagesContainer };