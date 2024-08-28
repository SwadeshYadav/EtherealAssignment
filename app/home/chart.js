

"use client";
import React, { useRef } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Register all necessary Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const Chart = () => {
  const chartRef = useRef(null);
  const lineChartRef = useRef(null);

  // Data for the Doughnut chart
  const doughnutData = {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["rgb(145 30 30)", "rgb(21, 128, 61)"],
      },
    ],
  };

  // Data for the Line chart
  const lineData = {
    labels: ["08/24", "09/24", "10/24", "11/24", "12/24", "14/24"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 15, 25, 20, 30],
        borderColor: "rgb(21, 128, 61)",
        backgroundColor: "rgba(21, 128, 61, 0.2)",
        fill: true,
      },
      {
        label: "Expenses", 
        data: [5, 15, 10, 20, 25, 35],
        borderColor: "rgb(145, 30, 30)",
        backgroundColor: "rgba(145, 30, 30, 0.2)",
        fill: true,
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: function (value) {
            return value + "%"; 
          },
        },
      },
    },
  };

  // Right-side content data
  const rightSideContent = [
    { label: "Active", time: "2h 4m", color: "rgb(21, 128, 61)" },
    { label: "Loading", time: "0m", color: "rgb(255, 207, 0)" },
    { label: "Setup", time: "0m", color: "rgb(0, 128, 255)" },
    { label: "Stalled", time: "8h 22m", color: "rgb(153, 27, 27)" },
  ];

  // Additional content for the right side
  const additionalContent = [
    {
      heading: "HALO-01",
      content: "Alarm on machine 1: 501 -(x1)- OVERTRAVEL(SOFT 1)",
      date: "7/29",
      time: "03:09",
    },
    {
      heading: "HALO-01",
      content: "Machine 1 idle for 15 minutes",
      date: "7/30",
      time: "01:17",
    },
    {
      heading: "NIMBUS-09",
      content: "Alarm on NIMBUS: 500-(y)+ OVERTRAVEL(SOFT1)",
      date: "8/21",
      time: "10:04",
    },
    {
      heading: "NIMBUS-09",
      content: "Alarm on NIMBUS: 500-(y)+ OVERTRAVEL(SOFT1)",
      date: "6/23",
      time: "11:35",
    },
    {
      heading: "NIMBUS-09",
      content: "Alarm on NIMBUS: 500-(y)+ OVERTRAVEL(SOFT1)",
      date: "6/29",
      time: "12:32",
    },
    {
      heading: "NIMBUS-09",
      content: "Alarm on NIMBUS: 500-(y)+ OVERTRAVEL(SOFT1)",
      date: "6/29",
      time: "11:49",
    },
  ];

  return (
    <div className="text-white my-2">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Doughnut Chart */}
        <div className="flex-grow bg-zinc-800 w-fullrounded-md">
          <h2 className="mb-4 mx-5">Productivity</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:h-28 h-28 md:mx-4 mx-20">
              <Doughnut ref={chartRef} data={doughnutData} />
            </div>
            <div className="flex flex-col space-y-4 w-72 mx-4 md:w-72 my-2">
              <div className="flex space-x-4 w-full">
                {rightSideContent.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="w-full bg-zinc-700 rounded-md flex items-center"
                  >
                    <div
                      className="w-1 h-12 rounded-xl mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div>
                      <div className="font-bold text-[12px]">{item.label}</div>
                      <div className="text-gray-400 text-[14px]">
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 w-full">
                {rightSideContent.slice(2).map((item, index) => (
                  <div
                    key={index}
                    className="w-full bg-zinc-700 rounded-md flex items-center"
                  >
                    <div
                      className="w-1 h-14 rounded-xl mr-2 "
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div>
                      <div className="font-bold text-[12px]">{item.label}</div>
                      <div className="text-gray-400 text-[14px]">
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Line Chart */}  
        <div className="flex-grow bg-zinc-800 md:p-4 rounded-md">
          <div className="md:w-full w-64 h-44">
            <Line ref={lineChartRef} data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="flex-grow bg-zinc-800 rounded-md md:px-2 px-1">
          <h2 className="text-bold md:text-[16px] text-[18px] mx-1 md:mx-0">Alarms</h2>
          <div className="flex flex-col space-y-1 h-52 overflow-y-auto mt-1 custom-scrollbar ">
            {additionalContent.map((item, index) => (
              <div key={index} className="bg-zinc-700 p-0 rounded-md px-2 py-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-[12px] md:text-[12px] text-gray-300">
                    {item.heading}
                  </h3>
                  <div className="flex space-x-1 mt-1">
                    <h4 className="text-[12px] md:text-[12px] text-gray-300">{item.date}</h4>
                    <h4 className="text-[12px] md:text-[12px] text-gray-300">{item.time}</h4>
                  </div>
                </div>
                <p className="text-[12px] md:text-[11px] text-gray-300">{item.content}</p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
