import React, { useState } from 'react';

const Accordian = ({ data, onSelect }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    if (onSelect) {
      onSelect(newIndex);
    }
  };

  return (
    <div className="w-full">
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <div onClick={() => toggleAccordion(index)}
            className="cursor-pointer w-full flex justify-between items-center px-4 pt-2 text-left font-semibold text-gray-700 hover:bg-gray-200 transition-all">
            <h3>{item.title}</h3>
          </div>
          
          <div className={`px-4 md:py-2 bg-transparent overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
