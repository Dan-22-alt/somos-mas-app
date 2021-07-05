import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <Alert
      justifyContent="center"
      status="error"
      size="small"
      s
      style={{ padding: 0, marginTop: 5, borderRadius: 5 }}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorMessage;
