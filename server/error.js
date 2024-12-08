// // eslint-disable-next-line import/prefer-default-export
// export const createError = (status, message) => {
//     const err = new Error();
//     err.status = status;
//     err.message = message;
//     return err;
//   };

// eslint-disable-next-line import/prefer-default-export
export const createError = (status, message) => {
  const error = new Error(message); // Pass the message to the Error constructor
  error.status = status; // Set the status property
  return error; // Return the error object
};