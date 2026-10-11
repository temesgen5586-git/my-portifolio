// Use this if you want real brand logos (instead of text abbreviations)
// Requires: npm install react-icons

import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb, SiMysql, SiDocker, SiAmazonaws, SiGit, SiPython, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';

const map = {
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Docker: SiDocker,
  AWS: SiAmazonaws,
  Git: SiGit,
  Python: SiPython,
  Tailwind: SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss3,
};

export default function TechIcon({ name, size = 24, color }) {
  const Icon = map[name];
  if (!Icon) return null;
  return <Icon size={size} style={{ color }} />;
}