import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Label = ({ children, icon }) => (
  <label className="flex items-center">
    {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
    {children}
  </label>
);