import React from 'react'

const Accordian = () => {
  return (
    <div>
        <div className="border-b border-slate-200">
  <button onclick="toggleAccordion(1)" className="w-full flex justify-between items-center py-5 text-slate-800">
    <span>What is Material Tailwind?</span>
    <span id="icon-1" className="text-slate-800 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    </span>
  </button>
  <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="pb-5 text-sm text-slate-500">
      Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
    </div>
  </div>
</div>

    </div>
  )
}

export default Accordian