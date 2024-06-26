import "@toast-ui/editor/dist/toastui-editor.css";
import {
  Editor,
  EditorProps,
  Editor as EditorType,
} from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

interface PROPS {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: PROPS) => {
  const editorRef = useRef<EditorType>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance?.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border">
      <div className="flex justify-between items-center p-5 relative">
        <h2 className="font-bold text-2xl">Result</h2>
        <button
          onClick={() => {
            const content = editorRef.current?.getInstance().getMarkdown();
            navigator.clipboard.writeText(content).then(() => {
              console.log("Copied to clipboard!");
            });
          }}
          className="active:bg-gray-400 flex gap-2 bg-gray-400 active:text-white px-5 py-3 rounded-md relative"
        >
          <Copy className="w-6 h-6" /> Copy
        </button>
      </div>
      <Editor
        initialValue="Your result here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        ref={editorRef}
        onChange={() => {
          console.log(editorRef.current?.getInstance().getMarkdown());
        }}
      />
    </div>
  );
};

export default OutputSection;
