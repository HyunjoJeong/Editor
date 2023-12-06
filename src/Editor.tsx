import React, { useState } from "react";

type Editor = ({
  defaultValue,
}: {
  defaultValue?: string;
}) => React.JSX.Element;

const Editor: Editor = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "hi");
  return <div>Editor 에요 {value}</div>;
};

export default Editor;
