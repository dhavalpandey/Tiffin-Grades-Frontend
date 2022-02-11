export const getStatus = () => {
  if (localStorage.getItem("google_id")) {
    return true;
  } else {
    return false;
  }
};

export const getUploaded = () => {
  if (localStorage.getItem("adjectives_submitted")) {
    return true;
  } else {
    return false;
  }
};

export const getYear = () => {
  if (localStorage.getItem("year")) {
    return true;
  } else {
    return false;
  }
};
