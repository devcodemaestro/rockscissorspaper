import React from "react";
interface ButtonProps {
  title: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="shadow-lg px-5 py-2 rounded-lg cursor-pointer bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out active:bg-gray-300 max-[370px]:w-full"
    >
      {title}
    </button>
  );
};

export default Button;
