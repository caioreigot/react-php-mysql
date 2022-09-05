import styled from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;

  position: relative;
  
  width: 100%;
  min-height: 65px;
  max-height: 400px;
  overflow-y: auto;

  margin-bottom: 5px;
  padding: 10px 40px 10px 10px;
  
  border: 1px solid var(--light-blue);
  border-radius: 0 10px 10px 10px;

  p {
    font-size: 1.2rem;
    color: var(--white);

    width: 100%;
    word-wrap: break-word;
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

export { StyledMessage };