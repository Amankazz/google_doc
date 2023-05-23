import React, { useState, useRef, useEffect } from "react";

const Editor = () => {
  const [pages, setPages] = useState([{ content: "" }]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const currentHeight = textarea.scrollHeight;

    if (currentHeight > textarea.clientHeight) {
      const lastPageIndex = pages.length - 1;
      if (textarea.value.trim() !== "") {
        setPages([...pages, { content: "" }]);
        setTimeout(() => {
          const nextPageTextarea = textareaRef.current;
          nextPageTextarea.focus();
          nextPageTextarea.setSelectionRange(0, 0);
        }, 0);
      }
      textarea.value = pages[lastPageIndex].content;
    }
  }, [pages]);

  const handleContentChange = (pageIndex, content) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].content = content;
    setPages(updatedPages);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <div className="flex-grow p-8">
          {pages.map((page, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-4 shadow-md rounded-lg h-full mb-4"
              style={{ overflowY: "hidden" }}
            >
              <textarea
                ref={index === pages.length - 1 ? textareaRef : null}
                style={{ overflow: "hidden", resize: "none" }}
                className="w-full h-full resize-none outline-none"
                placeholder="Start typing..."
                value={page.content}
                onChange={(e) => handleContentChange(index, e.target.value)}
              ></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;

{
  /*import React, { useState } from "react";

const Editor = () => {
  const [pages, setPages] = useState([{ content: "" }]);

  const handleContentChange = (pageIndex, content) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].content = content;
    setPages(updatedPages);

    if (content.trim() !== "") {
      const lastPageIndex = pages.length - 1;
      if (pageIndex === lastPageIndex) {
        setPages([...pages, { content: "" }]);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="flex-1 flex flex-col">
        <div className="flex-grow px-8">
          {pages.map((page, index) => (
            <div
              key={index}
              className="bg-white border-30 border-8 border-gray-100 p-4 shadow-md rounded-lg h-full mb-4"
            >
              <textarea
                className="w-full h-full resize-none outline-none"
                placeholder="Start typing..."
                value={page.content}
                onChange={(e) => handleContentChange(index, e.target.value)}
              ></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;*/
}
