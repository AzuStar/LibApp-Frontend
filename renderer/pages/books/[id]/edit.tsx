import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Link from "../../../components/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material";
import { Book, Branch } from "../../../lib/types";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

const UserDetails = ({ title, author, renter }: Book) => {
  const [loading, setLoading] = React.useState(false);
  const handleRent = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };
  const handleReturn = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };
  return <></>;
};

export default function BookPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [book, setBook] = React.useState<Book>();

  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    router.push(`/branches/${router.query.id}`);
  };
  React.useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBook({
        id: parseInt(router.query.id as string),
        title: "Book 1",
        author: "Author 1",
        branch: {
          id: 1,
          name: "Branch 1",
        },
      });
      setTitle("Book 1");
      setAuthor("Author 1");
    })();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>LibApp - Edit book</title>
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
            {book.branch && (
              <TextField
                value={book.branch.name}
                label="Branch"
                InputLabelProps={{
                  shrink: true,
                }}
                disabled
              />
            )}
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Book title"
              autoFocus
              disabled={loading}
            />
            <TextField
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              label="Book author"
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
              <LoadingButton
                onClick={handleSubmit}
                disabled={!title || !author}
                loading={loading}
                size="large"
                variant="contained"
                color="primary"
              >
                Update book
              </LoadingButton>
            </Box>
          </Box>
        )}
      </Root>
    </React.Fragment>
  );
}
