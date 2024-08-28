"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js"; 

// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MachineStatusnimbus = () => {
  const [data, setData] = useState([]);

  // Example Machine Content
  const MachineContent = [
    { label: "Active", time: "1h 56m", color: "rgb(21, 128, 61)" },
    { label: "Loading", time: "0m", color: "rgb(255, 207, 0)" },
    { label: "Setup", time: "0m", color: "rgb(0, 128, 255)" },
    { label: "Stalled", time: "11m", color: "rgb(153, 27, 27)" },
  ];

  useEffect(() => {
    // Simulate fetching data
    const fetchedData = [
      {
        mode: "MEM",
        program: "01-DRM",
        tool: "8",
      },
      {
        partcount: "1205",
        partgoal: "0",
        spindle: "7999",
      },
    ];
    setData(fetchedData);
  }, []);

  // Data for the Bullet chart with alternating color segments
  
  const bulletData = {
    labels: ["Progress"],
    datasets: [
      {
        label: "Segment 1",
        data: [20], 
        backgroundColor: "rgba(21, 128, 61, 0.6)",
        borderColor: "rgba(21, 128, 61, 1)",
        borderWidth: 1,
      },
      {
        label: "Segment 2",
        data: [2], 
        backgroundColor: "rgba(153, 27, 27, 0.6)",
        borderColor: "rgba(153, 27, 27, 1)",
        borderWidth: 1,
      },
      {
        label: "Segment 3",
        data: [20], 
        backgroundColor: "rgba(21, 128, 61, 0.6)",
        borderColor: "rgba(21, 128, 61, 1)",
        borderWidth: 1,
      },
      {
        label: "Segment 4",
        data: [5], 
        backgroundColor: "rgba(153, 27, 27, 0.6)",
        borderColor: "rgba(153, 27, 27, 1)",
        borderWidth: 1,
      },
      
     
      {
        label: "Segment 5",
        data: [50], 
        borderColor: "rgba(21, 128, 61, 1)",
        backgroundColor: "rgba(41, 128, 61, 0.6)",
       
        borderWidth: 1,
      },
      
    ],
  };

  const bulletOptions = {
    indexAxis: "y", // Horizontal bar chart
    scales: {
      x: {
        stacked: true, 
        min: 0,
        max: 100, 
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-zinc-800">
      
      <div className="flex flex-row lg:flex-row items-center justify-between md:justify-normal  p-4">
  <h2 className="md:text-[15px] text-[16px] font-bold text-gray-300 mx-1 flex-shrink-0">
  NIMBUS -09
  </h2>
  <h2 className="md:text-[15px] text-[16px] text-green-500 border border-gray-300 rounded px-2 mt-1 lg:mx-24 w-fit">
  ACTIVE
  </h2>
</div>

      <div className="flex md:flex-row flex-col md:my-6 my-2">
        <div className="flex md:flex-row flex-col w-full">
          {/* Content Container */}
          <div className="flex flex-col md:w-1/2 w-full p-2 rounded-md space-y-4">
            {/* First Section */}
            {data.length > 0 && (
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <div className="flex flex-col w-1/3">
                    <div className="flex-grow border border-gray-500 py-1 rounded-t-md flex items-center justify-center">
                      <span className="text-[12px] text-gray-200">MODE</span>
                    </div>
                    <div className="flex-grow bg-zinc-700 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">
                        {data[0].mode}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">PROGRAM</span>
                    </div>
                    <div className="flex-grow bg-zinc-700 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">
                        {data[0].program}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">TOOL</span>
                    </div>
                    <div className="flex-grow bg-zinc-700 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">
                        {data[0].tool}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Second Section */}
            {data.length > 1 && (
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex space-x-4">
                  <div className="flex flex-col w-1/3">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center">
                      <span className="text-[12px] text-white">PART COUNT</span>
                    </div>
                    <div className="flex-grow bg-zinc-700 border border-gray-500 rounded-b-md flex items-center justify-center">
                      <span className="text-[12px] text-white">
                        {data[1].partcount}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">PART GOAL</span>
                    </div>
                    <div className="flex-grow bg-zinc-700 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">
                        {data[1].partgoal}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">SPINDLE</span>
                    </div>
                    <div className="flex-grow bg-zinc-700 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">
                        {data[1].spindle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Productivity Container */}
          <div className="flex flex-col space-y-4 w-[302px] md:mx-4 mx-2 md:w-72 my-2">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 w-full">
                {MachineContent.slice(0, 2).map((item, index) => (
                  <div key={index} className="w-full bg-zinc-700 rounded-md flex items-center">
                    <div className="w-1 h-14 rounded-xl mr-2" style={{ backgroundColor: item.color }}></div>
                    <div>
                      <div className="font-bold text-[12px] text-gray-300">{item.label}</div>
                      <div className="text-gray-400 text-[14px]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 w-full">
                {MachineContent.slice(2).map((item, index) => (
                  <div key={index} className="w-full bg-zinc-700 rounded-md flex items-center">
                    <div className="w-1 h-14 rounded-xl mr-2" style={{ backgroundColor: item.color }}></div>
                    <div>
                      <div className="font-bold text-[12px] text-gray-300">{item.label}</div>
                      <div className="text-gray-400 text-[14px]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bullet Chart Section */}
        <div className="md:w-full w-[314px] mt-2">
          <div className="h-32 w-full bg-zinc-900 p-4  border border-gray-700">
            <Bar data={bulletData} options={bulletOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineStatusnimbus;
