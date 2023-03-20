import React, { useLayoutEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";

export const CodeBlock = ({ codeString, language }) => {
  useLayoutEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      customStyle={{ height: 600 }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};
