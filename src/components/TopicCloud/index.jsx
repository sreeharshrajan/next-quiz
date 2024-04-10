import React from "react";

function TopicCloud({ options, selectedOption, onChange }) {
  return (
    <ul className="flex gap-3 my-8 md:my-12 flex-wrap justify-center px-4 md:px-8 max-w-lg mx-auto">
      {options.map((option, index) => (
        <li
          className={`px-2 py-1 md:text-lg relative bg-gray-100 rounded-lg select-none hover:shadow hover:shadow-teal-500 hover:outline hover:outline-teal-600 cursor-pointer ${
            selectedOption === option.value &&
            "shadow shadow-teal-500 outline-dashed outline-teal-600"
          }`}
          key={index}
        >
          <input
            type="radio"
            id={`option${index}`}
            name="radioOptions"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <label className="cursor-pointer" htmlFor={`option${index}`}>
            {option.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TopicCloud;
