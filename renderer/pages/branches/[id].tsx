import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Link from "../../components/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material";
import { Book, Branch } from "../../lib/types";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BookListItem } from "../../components/BookListItem";
import { useRouter } from "next/router";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

export default function BookPage() {
  const router = useRouter();
  const [branch, setBranch] = React.useState<Branch>();
  const [books, setBooks] = React.useState<Book[]>();
  React.useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBranch({
        id: parseInt(router.query.id as string),
        name: "Branch 1",
      });
      setBooks([
        {
          id: 1,
          title: "Book 1",
          author: "Author 1",
          renter: "user1",
        },
        {
          id: 2,
          title: "Book 2",
          author: "Author 2",
        },
      ]);
    })();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>LibApp - Branch details</title>
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
        {branch && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Typography variant="subtitle1">{branch.name}</Typography>
            <Button
              variant="contained"
              color="primary"
              href={`/branches/${branch.id}/add`}
              LinkComponent={Link}
            >
              Add book
            </Button>
          </Box>
        )}
        {books && (
          <>
            <List>
              {books.map((book) => (
                <BookListItem key={book.id} {...book} />
              ))}
            </List>
          </>
        )}
      </Root>
    </React.Fragment>
  );
}
