import React from 'react';

import { render, screen } from './react-testing-library';
import { GridColDef } from '@mui/x-data-grid-pro';
import { LicenseInfo } from '@mui/x-data-grid-pro';
LicenseInfo.setLicenseKey(
  'key',
);
import {
  DataGridPro,
} from '@mui/x-data-grid-pro';
import { Box } from '@mui/material';

test('it works', async () => {
  const columns: GridColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
    },
    {
      headerName: 'Age',
      field: 'age',
    },
  ];

  const rows = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 21 },
  ];

  render(
    <Box width={'1000px'} height={'1000px'}>
      <DataGridPro
        autoHeight
        rows={rows}
        columns={columns}
       />
    </Box>
  );

  await screen.findByRole('columnheader');
});
