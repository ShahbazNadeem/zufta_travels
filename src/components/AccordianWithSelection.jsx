import { useState } from "react";
import Accordian from "./Accordian";

const AccordianWithSelection = ({ data, onSelect }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleSelect = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    if (onSelect) {
      onSelect(newIndex);
    }
  };

  return <Accordian data={data} onSelect={handleSelect} />;
};

export default AccordianWithSelection;
