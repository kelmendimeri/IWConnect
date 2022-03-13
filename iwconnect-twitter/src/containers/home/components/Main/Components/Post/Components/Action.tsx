import * as React from "react";
import styled from "styled-components";

interface Props {
  icon?: any;
  actionNumber?: number;
}

function Action({ icon, actionNumber }: Props) {
  return (
    <Styled.Container>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Number>{actionNumber}</Styled.Number>
    </Styled.Container>
  );
}

export default Action;
const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Icon: styled.div``,
  Number: styled.div`
    margin-left: 10px;
  `,
};
