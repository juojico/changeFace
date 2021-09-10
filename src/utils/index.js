export const inRange = (num, max, min = 0) => {
  return Math.min(max, Math.max(min, num));
};

export const repeatRange = (num, max, min = 0) => {
  switch (true) {
    case num > max:
      return min;
    case num < min:
      return max;
    default:
      return num;
  }
};
