import React from "react";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "../components/Link";
import { styled } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import BookIcon from "@mui/icons-material/Book";
import DeleteIcon from "@mui/icons-material/Delete";
import UndoIcon from "@mui/icons-material/Undo";
import { Book, Branch } from "../lib/types";
import { BookListItem } from "../components/BookListItem";
import { BranchListItem } from "../components/BranchListItem";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

const StaffView = () => {
  const [branches, setBranches] = React.useState<Branch[]>([]);
  React.useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBranches([
        {
          id: 1,
          name: "Branch 1",
        },
        {
          id: 2,
          name: "Branch 2",
        },
      ]);
    })();
  }, []);
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        LibApp
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Your branches
      </Typography>
      <List>
        {branches.map((branch) => (
          <BranchListItem key={branch.id} {...branch} />
        ))}
      </List>
    </Box>
  );
};

const UserView = () => {
  const [rented, setRented] = React.useState<Book[]>([]);
  const [unbooked, setUnbooked] = React.useState<Book[]>([]);
  React.useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setRented([
        {
          id: 1,
          title: "Book 1",
          author: "Author 1",
          renter: "user1",
        },
      ]);
      setUnbooked([
        {
          id: 2,
          title: "Book 2",
          author: "Author 2",
        },
        {
          id: 3,
          title: "Book 3",
          author: "Author 2",
        },
        {
          id: 4,
          title: "Book 4",
          author: "Author 2",
        },
      ]);
    })();
  }, []);
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        LibApp
      </Typography>
      <Typography variant="subtitle1">Your rented books</Typography>
      <List>
        {rented.map((book) => (
          <BookListItem key={book.id} {...book} />
        ))}
      </List>
      <Typography variant="subtitle1">Library</Typography>
      <List>
        {unbooked.map((book) => (
          <BookListItem key={book.id} {...book} />
        ))}
      </List>
    </Box>
  );
};

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>LibApp - Home</title>
      </Head>
      <Root>
        <StaffView />
      </Root>
    </React.Fragment>
  );
}
