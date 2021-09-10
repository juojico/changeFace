export const wh = (w, h) => `
  width: ${typeof w === "number" ? w + "px" : w};
  height: ${typeof h === "number" ? h + "px" : h};
`;

export const xy = (x, y) => `
  left: ${typeof x === "number" ? x + "px" : x};
  top: ${typeof y === "number" ? y + "px" : y};
`;

export const flex = (
  content = "center",
  items = "center",
  direction = "row",
  wrap = "wrap"
) => `
  display: flex;
  justify-content: ${content};
  align-items: ${items};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;
