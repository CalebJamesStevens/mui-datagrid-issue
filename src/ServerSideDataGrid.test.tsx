import React from 'react';

import { render, screen } from './react-testing-library';
import { GridColDef } from '@mui/x-data-grid-pro';
import ServerSideDataGrid from './ServerSideDataGrid';
import { LicenseInfo } from '@mui/x-data-grid-pro';
LicenseInfo.setLicenseKey(
  '37b83db94a4536050ab7b3cc2e79a6a5Tz01NjU3NixFPTE3MDMzNDc4NzI4MjAsUz1wcm8sTE09cGVycGV0dWFsLEtWPTI=',
);

test('fetchRows is called on sort event', async () => {
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
    <ServerSideDataGrid
      initialPageSize={1}
      columns={columns}
      rows={rows}
      rowCount={rows.length}
      pageSizeOptions={[1]}
    />,
  );

  await screen.findByRole('columnheader');
});
