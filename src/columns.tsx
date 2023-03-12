// Колонки таблицы, запрос к /listObjectItems?workflow_id=1
import {
  GridColDef
} from '@mui/x-data-grid';

const columnsTest: GridColDef[] = [
  {
    field: 'id',
    headerName: 'id',
    type: 'number',
    width: 50,
    editable: true,
  },
  {
    field: 'workflow_id',
    headerName: 'workflow_id',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'name',
    type: 'string',
    width: 100,
    editable: true,
  },
  {
    field: 'code',
    headerName: 'code',
    type: 'string',
    width: 100,
    editable: true,
  },
  {
    field: 'comment',
    headerName: 'comment',
    type: 'string',
    width: 100,
    editable: true,
  },
  {
    field: 'isHistory',
    headerName: 'isHistory',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'isSystem',
    headerName: 'isSystem',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'isExport',
    headerName: 'isExport',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'status',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'dtCreate',
    headerName: 'dtCreate',
  //  type: 'dateTime',
    width: 100,
    editable: true,
  },
  {
    field: 'dtUpdate',
    headerName: 'dtUpdate',
  //  type: 'dateTime',
    width: 100,
    editable: true,
  },
  {
    field: 'userCreate',
    headerName: 'userCreate',
    width: 100,
    editable: true,
  },
  {
    field: 'userUpdate',
    headerName: 'userUpdate',
    width: 100,
    editable: true,
  },
];

export default columnsTest
