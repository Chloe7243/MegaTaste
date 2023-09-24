import { Link } from "react-router-dom";

const FooterLink = ({ type, children, to, onClick }) => {
  return (
    <li>
      <a href={to} onClick={onClick}>{children}</a>
    </li>
  );
};

export default FooterLink;
