import React, { useState } from "react";

const Editor = ({ defaultValue }: { defaultValue?: string }) => {
  const [value, setValue] = useState(1);

  return (
    <div>
      Editor 에요 {defaultValue || "hi~"} value: {value}
    </div>
  );
};

export default Editor;
