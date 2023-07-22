import { makeStyles } from "@mui/styles";

export const useMainStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  iconButtonWithoutBorderRadius: {
    borderRadius: "0!important",
  },
  textHeading: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "11rem",
  },
});
