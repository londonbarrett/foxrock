import { FC, ReactNode, memo } from 'react';

export type FullScreenContainerProps = {
  children: ReactNode;
};

export const FullScreenContainer: FC<FullScreenContainerProps> = memo(
  ({ children }) => <div>{children}</div>
);
