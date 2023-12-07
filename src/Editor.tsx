import React, { CSSProperties, useEffect, useRef } from "react";

type EditorProps = {
  initialContent?: string;
  toolBar?: string[][]; // * 나중에 string을 구체적인 tool 이름들로 바꾸자.
  wrapperStyle?: CSSProperties;
};

export default function Editor({
  initialContent,
  toolBar,
  wrapperStyle,
}: EditorProps) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef) {
      console.log(editorRef);
    }
  }, []);

  return (
    <div
      className="hyxn-eidtor-wrapper"
      style={composeWrapperStyle(wrapperStyle)}
    >
      <div className="hyxn-editor-toolbar-wrapper">
        {toolBar?.map((bar, idx) => {
          return (
            <div className="hyxn-editor-toolbar" key={`toolbar${idx}`}>
              {bar.map((tool) => {
                return <button>{tool}</button>;
              })}
            </div>
          );
        })}
        <div className="hyxn-editor-toolbar"></div>
        <div className="hyxn-editor-toolbar"></div>
      </div>
      <div
        className="hyxn-editor-main"
        ref={editorRef}
        contentEditable={true}
        suppressContentEditableWarning
        style={{}}
      >
        {initialContent}
      </div>
    </div>
  );
}

const composeWrapperStyle = (styles?: CSSProperties): CSSProperties => {
  return {
    border: "1px solid #d9d9d9",
    backgroundColor: "#fff",
    ...styles,
  };
};
