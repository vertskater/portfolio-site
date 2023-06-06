import { useState, useEffect } from "react";
import styles from "./css/about.module.css";
import data from "./data/content.json";

interface TextContent {
  [key: string]: string;
}

export default function About() {
  const sectionAboutMe = { style: styles.about };
  const techStack = { style: styles.techStack };
  const [content, setContent] = useState<TextContent[]>([]);
  const [skills, setSkills] = useState<{ icon: string }[]>([]);

  useEffect(() => {
    const siteText = data.find((item) => item.id === "about");
    const skillIcons = data.find((item) => item.id === "skills");
    if (siteText) setContent(siteText.textContent as TextContent[]);
    if (skillIcons) setSkills(skillIcons.icons as { icon: string }[]);
  }, []);

  return (
    <>
      <section className={Object.values(sectionAboutMe).join(" ")}>
        <h2>About Me</h2>
        <p className={styles.sub}>Here's My Story</p>
        <hr />
        {content.map((paragraph: TextContent, index: number) => (
          <p key={index}>{paragraph.text}</p>
        ))}
      </section>
      <section className={Object.values(techStack).join(" ")}>
        <h2>Tech Stack</h2>
        <div>
          {skills.map((skill, index) => {
            return <i key={index} className={skill.icon}></i>;
          })}
        </div>
      </section>
    </>
  );
}
