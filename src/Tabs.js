import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("HTML");
  const TABS = [
    {
      label: "HTML",
      content: `The HyperText Markup Language or HTML is the standard markup language
      for documents designed to be displayed in a web browser.`
    },
    {
      label: "CSS",
      content: `Cascading Style Sheets is a style sheet language used for describing
      the presentation of a document written in a markup language such as
      HTML or XML.`
    },
    {
      label: "JavaScript",
      content: `JavaScript, often abbreviated as JS, is a programming language that is
      one of the core technologies of the World Wide Web, alongside HTML and
      CSS.`
    }
  ];

  return (
    <div>
      <div>
        {TABS.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.label)}
            className={activeTab === tab.label && "active"}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {TABS.map((tab) => tab.label === activeTab && <p>{tab.content}</p>)}
      </div>
    </div>
  );
}
