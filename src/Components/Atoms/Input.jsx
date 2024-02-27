import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Input = ({ type, placeholder, icon }) => {
  return (
    <div className="relative">
    {icon && (
      <span className="absolute inset-y-0 left-2  flex items-center text-gray-500">
        <FontAwesomeIcon icon={icon} />
      </span>
    )}
    <input
      type={type}
      placeholder={placeholder}
      className={`pl-${icon ? "8" : "2"} px-8 py-2 border rounded-md w-full`}
    />
  </div>
  )
}
