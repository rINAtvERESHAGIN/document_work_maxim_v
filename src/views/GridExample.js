import React, {useEffect, useState} from "react";
import {AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridExample = ({tableData}) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    useEffect(() => {
        setRowData(tableData);
    }, [tableData])
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data) => {
            setRowData(data);
        };
        updateData(tableData);
    };

    return (
        <div style={{width: '100%', height: '100%'}}>
            <div
                id="myGrid"
                style={{
                    height: '100%',
                    width: '100%',
                }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    defaultColDef={{
                        flex: 1,
                        minWidth: 200,
                        resizable: true,
                        floatingFilter: true,
                    }}
                    onGridReady={onGridReady}
                    rowData={rowData}
                >
                    <AgGridColumn field="composer" filter={true}/>
                    <AgGridColumn field="executor" filter="agSetColumnFilter"/>
                    <AgGridColumn field="music_text" filter="agSetColumnFilter"/>
                    <AgGridColumn field="genre" filter="agSetColumnFilter"/>
                    <AgGridColumn field="label" filter="agSetColumnFilter"/>
                    <AgGridColumn field="nominations" filter="agSetColumnFilter"/>
                    <AgGridColumn field="release_date" filter="agSetColumnFilter"/>
                    <AgGridColumn field="songwriter" filter="agSetColumnFilter"/>
                    <AgGridColumn field="file_in_binary" filter="agSetColumnFilter"/>
                </AgGridReact>
            </div>
        </div>
    );
};

export default GridExample;