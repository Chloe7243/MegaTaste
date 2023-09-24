import Container from "../../UI/Container/Container";
import notFound from "../../../assets/notFound.svg";

const ErrorPage = () => {
  return (
    <Container
      style={{ textAlign: "center", fontSize: "1.5rem", position: "relative" }}
    >
      <img src={notFound} alt="" style={{ height: "60vh", width: "100%" }} />
      <a
        href="https://storyset.com/web"
        style={{
          backgroundColor: "white",
          position: "absolute",
          bottom: "9%",
          width: "100%",
          left: "0",
          padding: "1.3rem",
        }}
      >
        Web illustrations by Storyset
      </a>
    </Container>
  );
};

export default ErrorPage;
