export const getStatus = () => {
  if (localStorage.getItem("google_id")) {
    return true;
  } else {
    return false;
  }
};
