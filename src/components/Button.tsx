import React from "react";
interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="shadow-lg px-5 py-2 rounded-lg cursor-pointer bg-white">
      {title}
    </button>
  );
};

export default Button;
