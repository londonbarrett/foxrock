import styled from '@emotion/styled';
import { DraggableContainer } from 'garage-ui';
import { memo } from 'react';

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #999;
  padding: 100px;
`;

export const Panel = memo(() => (
  <DraggableContainer initialPosition={{ x: 100, y: 200 }}>
    <Container>Hola!</Container>
  </DraggableContainer>
));

Panel.displayName = 'Panel';
