import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme();
const customerRender = (ui: React.ReactElement, { ...renderOptions } = {}) => render(ui, {
  wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  ...renderOptions,
})

export * from '@testing-library/react';
export { customerRender as render };