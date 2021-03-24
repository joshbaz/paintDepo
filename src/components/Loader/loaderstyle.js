import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position:fixed;
  background: #322783;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-spin {
    animation: App-logo-spin infinite 2.2s linear;
    width: 100px;
    height: 100px;

   
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
