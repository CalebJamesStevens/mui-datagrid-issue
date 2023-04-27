import React from 'react';

/** MaterialUI Components */
import {
  DataGridPro,
  DataGridProProps,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
  GridToolbar,
} from '@mui/x-data-grid-pro';

/** Components */

/** styles */

/** actions */

/** state */

/** helpers */

/** Types */

interface ServerSideDataGridProps extends DataGridProProps {
  /**
   * Default numbers of rows to display per page
   */
  initialPageSize: number;
  /**
   * Optional sort model to apply on initial load
   */
  initialSortModel?: GridSortModel;
  /**
   * Optional filter model to apply on initial load
   */
  initialFilterModel?: GridFilterModel;
}

export const ServerSideDataGrid = ({
  initialPageSize,
  initialSortModel,
  initialFilterModel,
  ...otherProps
}: ServerSideDataGridProps) => {
  const [paginationModel, setPaginationModel] = React.useState<GridPaginationModel>({
    page: 0,
    pageSize: initialPageSize,
  });

  const [sortModel, setSortModel] = React.useState<GridSortModel | undefined>(initialSortModel);
  const [filterModel, setFilterModel] = React.useState<GridFilterModel | undefined>(initialFilterModel);

  return (
    <DataGridPro
      autoHeight
      pagination
      paginationMode='server'
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      sortingMode='server'
      sortModel={sortModel}
      onSortModelChange={(model) => {
        setPaginationModel((previousPaginationModel) => ({ page: 0, pageSize: previousPaginationModel.pageSize }));
        setSortModel(model);
      }}
      filterMode='server'
      filterModel={filterModel}
      
      {...otherProps}
    />
  );
};

export default ServerSideDataGrid;
