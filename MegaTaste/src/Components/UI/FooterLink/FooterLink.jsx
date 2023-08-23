import { Link } from "react-router-dom";

const FooterLink = ({ type, children }) => {
  return (
    <li>
      <Link>{children}</Link>
    </li>
  );
};

export default FooterLink;
