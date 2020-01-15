import React from "react";
import styled from "styled-components";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";

const Wrapper = styled.div`
  & > div {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? .7 : 1)};
  }
`;

const Choice = ({ disabled, ...props }) => (
  <Wrapper disabled={disabled}>
    <ListChoice {...props} />
  </Wrapper>
);

export default Choice;
