import { useEffect, useState } from "react";
import Project from "../components/project";
import Card from "../components/shared/card";
import Button from "../components/shared/button";
import PageTransition from "../components/shared/pageTransition";
import { GitHubCalendar } from "react-github-calendar";
import { projects } from "../data/projectData";
import { fetchGitHubActivity } from "../utils/github";

import "../styles/projects.css";
import ContactCard from "../components/shared/contact";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    async function loadGitHubData() {
      const activityData = await fetchGitHubActivity();
      setActivity(activityData.slice(0, 5));
    }

    loadGitHubData();
  }, []);

  return (
    <PageTransition className="pf-projects-wrapper">
      <Card className="pf-projects-intro" as="section">
        <h2>My Projects</h2>
        <p>
          A collection of projects showcasing my journey in web development.
          From interactive games to full-stack applications, each project
          represents a step forward in mastering new technologies and solving
          real-world problems.
        </p>
        <Button className="-tertiary-bg" href="https://github.com/David-RMason">
          <FaGithub /> Check out my GitHub
        </Button>
      </Card>
      {activity && (
        <Card as="section" className="pf-projects-activity-wrapper">
          <h2>Recent Activity</h2>
          <div className="pf-projects-activity-content">
            <GitHubCalendar
              username="david-rmason"
              hideTotalCount
              theme={{
                light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
                dark: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
              }}
              transformData={(contributions) => {
                const threeMonthsAgo = new Date();

                threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

                return contributions.filter(
                  (day) => new Date(day.date) >= threeMonthsAgo,
                );
              }}
            />

            <div className="github-activity">
              {activity.length === 0 ? (
                <p>No recent public GitHub activity found.</p>
              ) : (
                <ul>
                  {activity.map((event) => (
                    <li key={event.id}>
                      <span>{event.type}</span> in {event.repo.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Card>
      )}
      <Card className="pf-projects-featured" as="section">
        <h2>Featured Projects</h2>
        <div className="pf-projects-group-container">
          {projects.map(
            ({ name, image, description, techStack, link, featured }) =>
              featured && (
                <Project
                  name={name}
                  image={image}
                  description={description}
                  techStack={techStack}
                  link={link}
                  key={name}
                />
              ),
          )}
        </div>
      </Card>
      <ContactCard />
    </PageTransition>
  );
}
