import React, { useEffect, useState } from "react";

export default function Editor({ defaultValue }: { defaultValue?: string }) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      Editor 에요 {defaultValue || "hi~"} value: {value}
    </div>
  );
}
