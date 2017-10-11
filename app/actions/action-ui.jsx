export const VIEW = {
  SET_VIEW : 'SET_VIEW'
};

export const setView = arg => {
  return {
    type : VIEW.SET_VIEW,
    value : arg
  };
};
