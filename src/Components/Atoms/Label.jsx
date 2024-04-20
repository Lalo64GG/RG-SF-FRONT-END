import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Label = ({ children, icon, style }) => (
  <label className={`text-center  ${style}`}>
    {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
    {children}
  </label>
);