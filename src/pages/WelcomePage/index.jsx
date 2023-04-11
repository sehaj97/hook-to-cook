import chef from "../../chef.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WelcomePage() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card
        border="secondary"
        style={{
          width: "22rem",
          height: "90vh",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Card.Img variant="top" src={chef} />
        <Card.Body>
          <Card.Title className="text-start" style={{ fontSize: "4rem" }}>
            Let's Hook to Cook!
          </Card.Title>
          <Card.Text className="text-start">
            <Button href="#recipes" variant="success">
              Get Started
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WelcomePage;
