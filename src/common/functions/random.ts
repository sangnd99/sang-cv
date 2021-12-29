export const randomId = (index?: number) => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + index || 0 + "-" + s4();
};
