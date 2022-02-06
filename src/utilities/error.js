const errorHandler = (errorBit, msg, data) => {
  if (errorBit) return {is_error: errorBit, message: msg};
  else return {message: msg, data};
};

export default errorHandler;
