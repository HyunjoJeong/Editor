import React, {
  CSSProperties,
  MutableRefObject,
  forwardRef,
  useRef,
} from "react";

type EditorProps = {
  ref: MutableRefObject<null>;
  initialContent?: string;
  toolBar?: string[][]; // * 나중에 string을 구체적인 tool 이름들로 바꾸자.
  wrapperStyle?: CSSProperties;
};

const Editor = forwardRef(function Editor({
  ref,
  initialContent,
  toolBar,
  wrapperStyle,
}: EditorProps) {
  return (
    <div
      className="hyxn-eidtor-wrapper"
      style={composeWrapperStyle(wrapperStyle)}
    >
      <div className="hyxn-editor-toolbar-wrapper">
        {toolBar?.map((bar, idx) => {
          return (
            <div className="hyxn-editor-toolbar" key={`toolbar${idx}`}>
              {bar.map((tool, idx) => {
                return <button key={`tool${idx}`}>{tool}</button>;
              })}
            </div>
          );
        })}
        <div className="hyxn-editor-toolbar"></div>
        <div className="hyxn-editor-toolbar"></div>
      </div>
      <div
        className="hyxn-editor-main"
        ref={ref}
        contentEditable={true}
        suppressContentEditableWarning
        style={{}}
      >
        {initialContent}
      </div>
    </div>
  );
});

export default Editor;

const composeWrapperStyle = (styles?: CSSProperties): CSSProperties => {
  return {
    border: "1px solid #d9d9d9",
    backgroundColor: "#fff",
    ...styles,
  };
};
