import React from "react";
import styled from "styled-components";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";

const Wrapper = styled.div`
  & > div {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "inherit")};
  }
`;

const Choice = ({ disabled, ...props }) => (
  <Wrapper disabled={disabled}>
    <ListChoice disabled={disabled} {...props} />
  </Wrapper>
);

export default Choice;
