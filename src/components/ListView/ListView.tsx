// React Dependencies
import { useMemo, useRef, useState } from 'react'

// External Dependencies
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridApi } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";

// Internal Dependencies
import CellAvatar from './Cell/CellAvatar/CellAvatar';
import CellBadge from './Cell/CellBadge/CellBadge';
import CellAction from './Cell/CellAction/CellAction';

type ListViewProps = {
    // ...
}

type RowData = {
    make: string;
    model: string;
    price: number;
    electric: boolean;
};

const cellStyle = { display: 'flex', alignItems: 'center' };

const ListView = ({}: ListViewProps) => {
    const gridApiRef = useRef<GridApi | null>(null);

    const [rowData, setRowData] = useState<RowData[]>([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ])

    const colDefs: ColDef<RowData>[] = useMemo(() => [
        { field: "make", headerName: 'Name', cellRenderer: CellAvatar, cellStyle },
        { field: "model", headerName: 'Notebook Name', cellRenderer: CellBadge, cellStyle },
        { field: "price", headerName: 'Keyword' },
        { field: "electric", headerName: 'Updated' },
        { field: "electric", headerName: '', cellRenderer: CellAction, cellStyle, maxWidth: 120 },
    ], []);

    const defaultColDef = {
        flex: 1,
        resizable: false,
    };

    return (
        <div className="ag-theme-quartz" style={{ height: '70vh' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                pagination
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 20, 50, 100]}
            />
        </div>
    )
}

export default ListView