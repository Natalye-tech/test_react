
// Тестовая таблица проверка работоспособности запрса к серверу https://jsonplaceholder.typicode.com/posts

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

const baseURLTable = "https://jsonplaceholder.typicode.com/posts";

// Колонки первой таблицы, запрос к https://jsonplaceholder.typicode.com/posts;
const columnsTest: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
    width: 90
  },
  {
    field: 'userId',
    headerName: 'userId',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'title',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'body',
    type: 'string',
    width: 190,
    editable: true,
  },
];

export default function DataGridTest() {
  const [postTable, setPostTable] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (postTable.length == 0)
    {
      axios.get(baseURLTable).then((response) => {
        console.log('response.data = 1 ', response.data);
        setPostTable(response.data);
      }).catch(error => {
        setError(error);
      });
    }
  },[]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <div>
        <p><b>Таблица с данными с https://jsonplaceholder.typicode.com/posts</b></p>
      </div>
      <DataGrid
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
