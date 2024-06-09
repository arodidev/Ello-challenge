import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface SnackbarProps {
  showSnackBar: boolean;
  setShowSnackBar: React.Dispatch<React.SetStateAction<boolean>>;
  message: string | undefined;
}

const InfoSnackBar: React.FC<SnackbarProps> = ({
  showSnackBar,
  setShowSnackBar,
  message,
}) => {
  const handleClose = () => {
    setShowSnackBar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
};

export default InfoSnackBar;
