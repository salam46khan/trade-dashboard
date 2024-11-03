import { useState } from "react";
import { getData } from "../../initial/chartData";

import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import { RiFormula } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineCandlestickChart, MdOutlineLocationSearching } from "react-icons/md";
import { FiMaximize } from "react-icons/fi";

const Chart = () => {
    const [options, setOptions] = useState({
        data: getData(),

        footnote: {
            text: "1 Aug 2023 - 1 Nov 2023",
        },
        series: [
            {
                type: "candlestick",
                xKey: "date",
                xName: "Date",
                lowKey: "low",
                highKey: "high",
                openKey: "open",
                closeKey: "close",
            },
        ],
        background: {
            fill: "transparent", // Set your desired background color here
        },
    });
    return (
        <div className="chart mt-5">
            <div className="flex justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 chart-btn">
                        <RiFormula />
                        <p>Indicators</p>
                        <FaChevronDown />
                    </button>
                    <button className="flex items-center gap-1 chart-like-btn">
                        <MdOutlineCandlestickChart className="text-2xl" />
                    </button>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button className="flex items-center gap-1 chart-like-btn">
                        <p>5m</p>
                    </button>
                    <button className="flex items-center gap-1 chart-like-btn active">
                        <p>1h</p>
                    </button>
                    <button className="flex items-center gap-1 chart-like-btn">
                        <p>D</p>
                    </button>
                    <button className="flex items-center gap-1 chart-like-btn">
                        <FaChevronDown className="text-2xl"/>
                    </button>
                    <div className=" chart-divide"></div>
                    <button className="flex items-center gap-1 chart-like-btn">
                        <MdOutlineLocationSearching className="text-2xl"/>
                    </button>
                    <button className="flex items-center gap-1 chart-like-btn">
                        <FiMaximize className="text-2xl"/>
                    </button>
                </div>
            </div>
            <div className="">
                <AgCharts options={options} />
            </div>
        </div>
    );
};

export default Chart;