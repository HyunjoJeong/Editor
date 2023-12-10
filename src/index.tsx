import React, { CSSProperties, ForwardedRef, forwardRef } from "react";
import {
  composeEditorStyle,
  composeToolbarStyle,
  composeWrapperStyle,
} from "./styleComposer";

type EditorProps = {
  initialContent?: string;
  spellCheck?: boolean;
  toolBar?: string[][]; // * 나중에 string을 구체적인 tool 이름들로 바꾸자.
  wrapperStyle?: CSSProperties;
  editorStyle?: CSSProperties;
  toolbarStyle?: CSSProperties;
};

const Editor = forwardRef(function Editor(
  {
    initialContent = "",
    spellCheck = false,
    toolBar,
    wrapperStyle,
    editorStyle,
    toolbarStyle,
  }: EditorProps,
  ref?: ForwardedRef<HTMLDivElement> | undefined
) {
  return (
    <div
      className="hyxn-eidtor-wrapper"
      style={composeWrapperStyle(wrapperStyle)}
    >
      <div className="hyxn-editor-toolbar-wrapper">
        {toolBar?.map((bar, idx) => {
          return (
            <div
              className="hyxn-editor-toolbar"
              key={`toolbar${idx}`}
              style={composeToolbarStyle(toolbarStyle)}
            >
              {bar.map((tool, idx) => {
                return <button key={`tool${idx}`}>{tool}</button>;
              })}
            </div>
          );
        })}
      </div>
      <div
        className="hyxn-editor-main"
        ref={ref}
        spellCheck={spellCheck}
        contentEditable={true}
        suppressContentEditableWarning
        style={composeEditorStyle(editorStyle)}
        dangerouslySetInnerHTML={{ __html: initialContent }}
      />
    </div>
  );
});

export default Editor;
