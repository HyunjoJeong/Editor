import React, { CSSProperties } from "react";
type EditorProps = {
    initialContent?: string;
    toolBar?: string[][];
    wrapperStyle?: CSSProperties;
};
export default function Editor({ initialContent, toolBar, wrapperStyle, }: EditorProps): React.JSX.Element;
export {};
