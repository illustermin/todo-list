import React from "react";
import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        value={content}
        ref={contentRef}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 todo.."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
