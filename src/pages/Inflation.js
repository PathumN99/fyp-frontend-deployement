import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";

export default function InflationData() {

    const [records, setRecords] = useState([]);
    const [dataTableData, setDataTableData] = useState([]);

    useEffect(() => {
        async function fetchRecords() {
            const response = await fetch('/inflation/get-all');
            const data = await response.json();
            setRecords(data);
        }

        fetchRecords();
    }, []);

    useEffect(() => {
        const newDataTableData = records.map(record => {
            return {
                id: record.id,
                date: record.date,
                rate: record.rate,
            }
        });

        setDataTableData(newDataTableData);
    }, [records]);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    function setFilter(e) {
        setFilters({ global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS } })
    }

    return (
        <div className="datatable">
            <div className="filter-div">
                <input placeholder="Filter Date" className="filter-input" name="filter-date" type="text" onInput={setFilter} />
            </div>
            <div>
                <DataTable value={dataTableData} filters={filters}
                    paginator rows={5} rowsPerPageOptions={[5, 12, 24]}>
                    <Column field="id" header="ID" />
                    <Column field="date" header="Date" />
                    <Column field="rate" header="Inflation Rate (%)" />
                </DataTable>
            </div>
        </div>
    )
}



