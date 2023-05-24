import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2'
import { Chart as chartjs } from "chart.js/auto";

const LineChart = () => {

    const [records, setRecords] = useState([]);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        async function fetchRecords() {
            const response = await fetch("/cpi/get-all");
            const data = await response.json();
            setRecords(data);
        }

        fetchRecords();
    }, []);

    useEffect(() => {
        const newChartData = records.map((record) => {
            return {
                id: record.id,
                date: record.date,
                cpi: record.cpi,
            };
        });

        setChartData(newChartData);
    }, [records]);

    useEffect(() => {
        setDataObject({
            labels: chartData.map((data) => data.date),
            datasets: [
                {
                    label: "Consumer Price Index (CPI)",
                    backgroundColor: "aqua",
                    borderColor: "black",
                    borderWidth: 2,
                    data: chartData.map((data) => data.cpi),
                },
            ],
        });
    }, [chartData]);

    const [dataObject, setDataObject] = useState({
        labels: [],
        datasets: [
            {
                label: "Consumer Price Index (CPI) Forecast",
                backgroundColor: "aqua",
                borderColor: "black",
                borderWidth: 2,
                data: [],
            },
        ],
    });

    return (
        <Line data={dataObject}></Line>
    )
}

export default LineChart;