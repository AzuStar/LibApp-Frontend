import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "../../components/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material";
import { Book } from "../../lib/types";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/auth";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

const UserDetails = ({ title, author, renter, branch }: Book) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const handleRent = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    router.push(`/home`);
  };
  const handleReturn = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    router.push(`/home`);
  };
  return (
    <>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2">{author}</Typography>
      {branch && (
        <Typography variant="caption" gutterBottom>
          {branch.name}
        </Typography>
      )}
      <Box
        sx={{
          paddingTop: "1rem",
          width: "330px",
          margin: "0 auto",
        }}
      >
        {renter === "user1" && (
          <LoadingButton
            onClick={handleRent}
            loading={loading}
            size="large"
            variant="contained"
            color="secondary"
          >
            Return book
          </LoadingButton>
        )}
        {renter && renter !== "user1" && (
          <Alert severity="error">This book is currently unavailable</Alert>
        )}
        {!renter && (
          <LoadingButton
            onClick={handleReturn}
            loading={loading}
            size="large"
            variant="contained"
            color="primary"
          >
            Rent book
          </LoadingButton>
        )}
      </Box>
    </>
  );
};

const StaffDetails = ({ id, title, author, branch, renter }: Book) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const handleDelete = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    router.push(`/home`);
  };
  return (
    <>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2">{author}</Typography>
      {branch && (
        <Typography variant="caption" gutterBottom>
          {branch.name}
        </Typography>
      )}
      <Box
        sx={{
          paddingTop: "1rem",
          width: "330px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button
          size="large"
          variant="contained"
          color="secondary"
          href={`/books/${id}/edit`}
          LinkComponent={Link}
        >
          Edit book
        </Button>
        <LoadingButton
          onClick={handleDelete}
          loading={loading}
          size="large"
          variant="contained"
          color="error"
        >
          Delete book
        </LoadingButton>
      </Box>
    </>
  );
};

export default function BookPage() {
  const router = useRouter();
  const [auth] = useAuth();
  const [book, setBook] = React.useState<Book>();
  React.useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBook({
        id: parseInt(router.query.id as string),
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        renter: "",
        branch: {
          id: 1,
          name: "Branch 1",
        },
      });
    })();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>LibApp - Book details</title>
      </Head>
      <Root>
        <Typography variant="h4" gutterBottom>
          <IconButton
            sx={{ position: "absolute", left: 32 }}
            href="/home"
            LinkComponent={Link}
          >
            <ArrowBackIcon />
          </IconButton>
          LibApp
        </Typography>
        {book && (
          <>
            {auth.isStaff ? (
              <StaffDetails {...book} />
            ) : (
              <UserDetails {...book} />
            )}
          </>
        )}
      </Root>
    </React.Fragment>
  );
}
