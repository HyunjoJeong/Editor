import React, { useState } from "react";

const Editor = ({ defaultValue }: { defaultValue?: string }) => {
  const [value, setValue] = useState(defaultValue || "hi");
  return <div>Editor 에요 {value}</div>;
};

export default Editor;
