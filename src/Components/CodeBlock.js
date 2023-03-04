import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";

import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import 'prismjs/components/prism-python';

export const CodeBlock = ({codeString, language}) => (
  <SyntaxHighlighter language={language} style={materialDark}>
    {codeString}
  </SyntaxHighlighter>
);
