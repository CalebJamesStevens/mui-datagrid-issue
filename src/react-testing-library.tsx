/* eslint-disable react/prop-types */
import { RenderOptions, render as rtlRender } from '@testing-library/react';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import userEvent from '@testing-library/user-event';

export * from '@testing-library/react';

interface RenderOptionsProps extends Omit<RenderOptions, 'wrapper'> {
  locale?: string;
}

export const render = (ui: React.ReactElement, { ...renderOptions }: RenderOptionsProps = {}) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme();

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
};
