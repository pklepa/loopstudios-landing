import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: salmon;
  min-height: 100vh;
  width: 100%;

  .limit {
    max-width: ${({ theme }) => theme.sizes.desktop};
  }
`;

export default Layout;
