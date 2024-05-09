import styled from '@emotion/styled';
import { FC, memo, MouseEvent, ReactNode, useCallback, useState } from 'react';
import { Position } from './types';

const Container = styled.div<{ moving: boolean }>`
  cursor: ${({ moving }) => (moving ? 'grabbing' : 'grab')};
  position: fixed;
`;

export type DraggableContainerProps = {
  children: ReactNode;
  className?: string;
  initialPosition?: Position;
};

export const DraggableContainer: FC<DraggableContainerProps> = memo(
  ({ children, className, initialPosition = { x: 0, y: 0 } }) => {
    const [position, setPosition] = useState<Position>(initialPosition);
    const [pointer, setPointer] = useState<Position>();
    const mouseDownHandler = useCallback(
      (event: MouseEvent<HTMLElement>) =>
        setPointer({
          x: event.pageX - position.x,
          y: event.pageY - position.y,
        }),
      [position]
    );
    const mouseLeaveHandler = useCallback(() => setPointer(undefined), []);
    const mouseMoveHandler = useCallback(
      (event: MouseEvent<HTMLElement>) =>
        pointer &&
        setPosition({ x: event.pageX - pointer.x, y: event.pageY - pointer.y }),
      [pointer]
    );
    const mouseUpHandler = useCallback(() => setPointer(undefined), []);
    return (
      <Container
        className={className}
        moving={!!pointer}
        onMouseDown={mouseDownHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
        style={{
          top: position.y,
          left: position.x,
        }}
      >
        {children}
      </Container>
    );
  }
);
