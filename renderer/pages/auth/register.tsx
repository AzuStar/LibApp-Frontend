import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "../../components/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

export default function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isStaff, setIsStaff] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };
  return (
    <React.Fragment>
      <Head>
        <title>LibApp - Create account</title>
      </Head>
      <Root
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">LibApp</Typography>
        <Typography variant="subtitle1" gutterBottom>
          Create account
        </Typography>
        <Box
          sx={{
            paddingTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: "330px",
            margin: "0 auto",
          }}
        >
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            name="username"
            autoFocus
            disabled={loading}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            name="password"
            type="password"
            disabled={loading}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value={isStaff}
                  onChange={(_, checked) => setIsStaff(checked)}
                  disabled={loading}
                />
              }
              label="I am library staff"
            />
          </FormGroup>
          {isStaff && (
            <TextField
              value={token}
              onChange={(e) => setToken(e.target.value)}
              label="Staff Token"
              name="token"
              autoFocus
              disabled={loading}
            />
          )}

          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom>
              <Link href="/auth/login">Login instead</Link>
            </Typography>
            <LoadingButton
              onClick={handleSubmit}
              loading={loading}
              disabled={!username || !password || (isStaff && !token)}
              size="large"
              variant="contained"
              color="primary"
            >
              Create
            </LoadingButton>
          </Box>
        </Box>
      </Root>
    </React.Fragment>
  );
}
