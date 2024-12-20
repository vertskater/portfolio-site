//import data from "./data/content.json";
import useContent from "./data/useContent";
import { useState, useEffect } from "react";
import TextContent from "../ITextContent";
import styles from "./css/projects.module.css";

export default function Projects() {
  const data = useContent();
  const imgUrl = process.env.PUBLIC_URL;
  const [projects, setProjects] = useState<TextContent[]>([]);
  useEffect(() => {
    const content = data.find((item) => item.id === "projects");
    if (content) setProjects(content.projects as TextContent[]);
  }, [data]);

  return (
    <>
      <section className={styles.container}>
        {projects.map((project) => {
          return (
            <div key={project.id} className={styles.card}>
              <div>
                <img
                  className={styles.image}
                  src={`${imgUrl}/img/${project.image}`}
                  alt={project.title}
                />
              </div>
              <div className={styles.containerDescription}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  <a href={project.github} target="_blank">
                    <i className="devicon-github-original-wordmark colored"></i>
                  </a>
                  <a href={project.link} target="_blank">
                    {project.link ? "Live Preview" : ''}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
