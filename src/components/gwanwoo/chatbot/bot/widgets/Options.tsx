import React from "react";

interface Option {
  id: string;
  icon: any;
  name: string;
  handler: () => void;
}

interface OptionsProps {
  title: string;
  options: Option[];
}

const Options: React.FC<OptionsProps> = ({ title, options }) => {
  return (
    <div className="options">
      {/* <h1 className="options-header">{title}</h1> */}
      <div className="flex flex-wrap w-[400px] ml-[46px]">
        {options.map((option) => (
          <div
            className="flex flex-col w-1/3 p-1 box-border justify-center items-center rounded-md border-2 border-black cursor-pointer text-center"
            onClick={option.handler}
            key={option.id}
          >
            <div className="text-xl">{option.icon}</div>
            <h3 className="text-sm">{option.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
