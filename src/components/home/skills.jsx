import "../../styles/skills.css";
import { homepageInfo } from "../../data/homeData";

export default function Skills() {
  return (
    <section className="pf-skills">
      <header>
        <h2>Skills & Technologies</h2>
        <p>A diverse toolkit built from years of hands on experience.</p>
      </header>
      <div className="pf-tech-stack-content">
        {homepageInfo.techStack.map(({ title, items, icon: Icon }) => (
          <div key={title} className="pf-tech-category">
            <h3>
              {<Icon />} {title}
            </h3>
            <ul className="pf-home-tech-stack-list">
              {items.map((item) => (
                <li key={item} className="pf-home-tech-stack-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
