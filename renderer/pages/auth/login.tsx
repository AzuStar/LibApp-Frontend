import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "../../components/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/auth";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

export default function LoginPage() {
  const router = useRouter();
  const [auth, setAuth] = useAuth();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setAuth((prev) => ({
      ...prev,
      username: "test",
      isStaff: false,
    }));
    router.push("/home");
  };
  return (
    <React.Fragment>
      <Head>
        <title>LibApp - Login</title>
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
          Login
        </Typography>
        <Box
          sx={{
            paddingTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "330px",
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
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom>
              <Link href="/auth/register">Create account</Link>
            </Typography>
            <LoadingButton
              onClick={handleSubmit}
              loading={loading}
              disabled={!username || !password}
              size="large"
              variant="contained"
              color="primary"
            >
              Login
            </LoadingButton>
          </Box>
        </Box>
      </Root>
    </React.Fragment>
  );
}
