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
import Link from "./Link";
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
import LocationCityIcon from "@mui/icons-material/LocationCity";
import UndoIcon from "@mui/icons-material/Undo";
import { Book, Branch } from "../lib/types";

export const BranchListItem = ({ id, name }: Branch) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        role={undefined}
        onClick={() => {}}
        href={`/branches/${id}`}
        LinkComponent={Link}
      >
        <ListItemIcon>
          <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
