

import React from 'react';
import { HelpOutline } from '@mui/icons-material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Chart from './chart';
import MachineStatus from './machinestatus';

const Page = () => {
  const data = [
    { id: 1, topContent: '20%', Content: 'Active', digit: '20%' },
    { id: 2, topContent: '0%', Content: 'Setup' },
    { id: 3, topContent: '80%', Content: 'Stall', digit: '20%' },
    { id: 4, topContent: '10.4hr', Content: 'Machine Hours', digit: '36hr' },
    { id: 5, topContent: '502 min', Content: 'Time Stalled', digit: '20%' },
    { id: 6, topContent: '0', Content: 'Parts Made' }
  ];

  return (
    <>
      {/* Container for the items */}
      <div className="flex flex-wrap gap-2 md:gap-0 mr-1">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex-1 w-full sm:w-1/2 lg:w-1/3 bg-zinc-800 text-white relative flex flex-col py-3 px-1 mx-1 my-1 rounded-md"
          >
            {item.topContent && (
              <div className="absolute top-0 right-2 bg-zinc-800 rounded-full p-1">
                <HelpOutline className="text-gray-400 text-[16px]" />
              </div>
            )}
            <div className="flex-grow flex font-bold text-[24px] mx-4">{item.topContent}</div>
            <div className="text-center text-white w-full h-full mx-4 flex text-[10px]">
              <span className="text-gray-300">{item.Content}</span>
              {item.digit && (
                <>
                  <ArrowDropDownOutlinedIcon
                    className={`text-[18px] ${item.digit.includes('hr') ? 'text-red-500' : 'text-green-500'}`}
                  />
                  <span className={`font-bold ${item.digit.includes('hr') ? 'text-red-500' : 'text-green-500'}`}>
                    {item.digit}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <Chart />

      <MachineStatus />
    </>
  );
};

export default Page;

