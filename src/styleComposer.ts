import { CSSProperties } from "react";

export const composeWrapperStyle = (styles?: CSSProperties): CSSProperties => {
  return {
    border: "1px solid #d9d9d9",
    borderRadius: "5px",
    backgroundColor: "#fff",
    ...styles,
  };
};

export const composeEditorStyle = (styles?: CSSProperties): CSSProperties => {
  return {
    outline: "none",
    padding: "6px",
    height: "200px",
    overflowY: "scroll",
    ...styles,
  };
};

export const composeToolbarStyle = (styles?: CSSProperties): CSSProperties => {
  return {
    display: "flex",
    padding: "3px",
    borderBottom: "1px solid #d9d9d9",
    ...styles,
  };
};
