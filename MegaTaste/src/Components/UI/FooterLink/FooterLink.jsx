import { Link } from "react-router-dom";

const FooterLink = ({ type, children, to }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default FooterLink;
