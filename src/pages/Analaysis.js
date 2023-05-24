import React, { useState } from "react";

export default function Analaysis() {

    const [dateValue, setDateValue] = useState('');
    const [description, setDescription] = useState('');

    const handleDateValueChange = (event) => {
        setDateValue(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const postData = async () => {
        const data = { date: dateValue, description: description };

        if (dateValue.length > 0 && description.length > 0) {
            try {
                const response = await fetch("/analysis/create", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                alert("Successfully Submitted!");
                console.log(result);

            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Fields Should Not Be Empty!");
        }

    };

    return (

        <form>
            <div className="form">
                <div>
                    <label className="label">Select Month:</label>
                    <select placeholder="Select Month" className="input" name="date" value={dateValue} onChange={handleDateValueChange}>
                        <option value="2018-Jan">2018-Jan</option>
                        <option value="2018-Feb">2018-Feb</option>
                        <option value="2018-Mar">2018-Mar</option>
                        <option value="2018-Apr">2018-Apr</option>
                        <option value="2018-May">2018-May</option>
                        <option value="2018-Jun">2018-Jun</option>
                        <option value="2018-Jul">2018-Jul</option>
                        <option value="2018-Aug">2018-Aug</option>
                        <option value="2018-Sep">2018-Sep</option>
                        <option value="2018-Oct">2018-Oct</option>
                        <option value="2018-Nov">2018-Nov</option>
                        <option value="2018-Dec">2018-Dec</option>
                        <option value="2019-Jan">2019-Jan</option>
                        <option value="2019-Feb">2019-Feb</option>
                        <option value="2019-Mar">2019-Mar</option>
                        <option value="2019-Apr">2019-Apr</option>
                        <option value="2019-May">2019-May</option>
                        <option value="2019-Jun">2019-Jun</option>
                        <option value="2019-Jul">2019-Jul</option>
                        <option value="2019-Aug">2019-Aug</option>
                        <option value="2019-Sep">2019-Sep</option>
                        <option value="2019-Oct">2019-Oct</option>
                        <option value="2019-Nov">2019-Nov</option>
                        <option value="2019-Dec">2019-Dec</option>
                    </select>

                </div>
                <div>
                    <label className="label">Analysis Description:</label>
                    <input placeholder="Your Analysis" className="input" name="description" type="text" value={description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <button className="button" onClick={postData}>Submit Analysis</button>
                </div>

            </div>
        </form>

    )
}