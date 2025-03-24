import React, { createContext, useContext } from 'react';
import { CountUp as ReactCountUp } from 'react-countup';

const CountUpContext = createContext();

const CountUpContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row bg-[#f0f0e5]">
        <CountUpContext.Provider value={{}}>
          {children}
        </CountUpContext.Provider>
      </div>
    </div>
  );
};

const CountUpItem = ({ start, end, duration, suffix, children }) => {
  return (
    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
      <div className="flex justify-center items-center flex-col">
        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus">
          <ReactCountUp start={start} end={end} duration={duration} enableScrollSpy={true} scrollSpyOnce={true} />{suffix}
        </span>
        {children}
      </div>
    </div>
  );
};

const CountUpLabel = ({ text }) => {
  return (
    <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">
      {text}
    </span>
  );
};

// export { CountUpContainer, CountUpItem, CountUpLabel };
CountUpContainer.CountUpLabel = CountUpLabel
CountUpContainer.CountUpItem = CountUpItem
export default CountUpContainer;
