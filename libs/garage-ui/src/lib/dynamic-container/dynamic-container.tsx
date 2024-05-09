import styled from '@emotion/styled';
import { FC, ReactNode, memo, useEffect, useRef } from 'react';

export type DynamicContainerProps = {
  children: ReactNode;
  onResize?: (dimensions: { height?: number; width?: number }) => void;
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const DynamicContainer: FC<DynamicContainerProps> = memo(
  ({ children, onResize }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const container = containerRef.current;
      const observer = new ResizeObserver((entries) => {
        onResize && onResize({ width: entries[0].contentRect.width });
      });

      if (container) {
        observer.observe(container);
      }

      return () => {
        container && observer.unobserve(container);
      };
    }, [containerRef, onResize]);
    return <Container ref={containerRef}>{children}</Container>;
  }
);

export default DynamicContainer;
