import React from 'react';
import MuiGrid from '@mui/material/Grid';
import type { GridProps as MuiGridProps } from '@mui/material/Grid';

type Breakpoint = number | boolean | undefined;

type Grid2Props = MuiGridProps & {
  xs?: Breakpoint;
  sm?: Breakpoint;
  md?: Breakpoint;
  lg?: Breakpoint;
  xl?: Breakpoint;
};

const Grid2: React.FC<Grid2Props> = ({
  container,
  children,
  ...rest
}) => {
  // For v1 Grid, non-container items need `item` prop. Grid v2 style omits it.
  const isContainer = Boolean(container);
  const forwardedProps: MuiGridProps = {
    ...(rest as MuiGridProps),
  };

  if (!isContainer) {
    (forwardedProps as any).item = true;
  }

  return (
    <MuiGrid container={isContainer} {...forwardedProps}>
      {children}
    </MuiGrid>
  );
};

export default Grid2;
