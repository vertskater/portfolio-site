import data from "./data/content.json";
import { useState, useEffect } from "react";
import TextContent from "../ITextContent";

export default function Projects() {
  const [projects, setProjects] = useState<TextContent[]>([]);
  useEffect(() => {
    const content = data.find((item) => item.id === "projects");
    if (content) setProjects(content.projects as TextContent[]);
  }, []);

  return <h1>This is the Projects Site</h1>;
}
