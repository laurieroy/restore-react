import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Errors for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch((error) => console.log)
          }
        >
          Test 400 Error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch((error) => console.log)
          }
        >
          Test 401 Error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch((error) => console.log)
          }
        >
          Test 404 Error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch((error) => console.log)
          }
        >
          Test 500 Error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.getValidationError().catch((error) => console.log)
          }
        >
          Test Validation Error
        </Button>
      </ButtonGroup>
    </Container>
  );
}
