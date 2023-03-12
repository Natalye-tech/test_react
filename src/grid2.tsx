
// Тестовая таблица проверка работоспособности запрса к серверу /listObjectItems?workflow_id=1

import * as React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridColDef,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridValueGetterParams,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbar,
  ruRU
} from '@mui/x-data-grid';
import DataTable from './grid1_data';
import columnsTest from './columns'

export default function DataGridFromLocalServer() {
  const [postTable, setPostTable] = React.useState([]);
  const [error, setError] = React.useState(null);
  const baseURLTable = "/listObjectItems?workflow_id=1";

  React.useEffect(() => {
    if (postTable.length == 0)
    {
      axios.get(baseURLTable).then((response) => {
        console.log('response.data = 2 ', response.data);
        setPostTable(response.data);
      }).catch(error => {
        setError(error);
      });
    }
  },[]);

  return (
    <Box sx={{ height: 400, width: '100%', marginTop: '70px', marginBottom: '20px'}}>
      <div>
        <p><b>Таблица с данными c /listObjectItems?workflow_id=1</b></p>
      </div>
      <DataGrid
        //rows={DataTable}
        rows={postTable}
        columns={columnsTest}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
