import React, { useState } from 'react';

const Accordian = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-300 ">
          <span
            onClick={() => toggleAccordion(index)}
            className="cursor-pointer w-full flex justify-between items-center md:p-4 text-left font-semibold text-gray-700 hover:bg-gray-200 transition-all"
          >
            <h3>{item.title}</h3>
          </span>
          <div
            className={`px-4 py-2 bg-transparent overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
