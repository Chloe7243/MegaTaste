import Container from "../UI/Container/Container";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Container>
      Home page
      <Link to="/">Menu</Link>
    </Container>
  );
};

export default HomePage;
