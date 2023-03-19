import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";

import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-csharp';

export const CodeBlock = ({codeString, language}) => (
  <SyntaxHighlighter language={language} style={atomDark} customStyle={{
    height: 600,
  }}>
    {codeString}
  </SyntaxHighlighter>
);
