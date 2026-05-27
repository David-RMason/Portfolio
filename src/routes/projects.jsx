import { useEffect, useState } from "react";
import Project from "../components/project";
import Card from "../components/shared/card";
import PageTransition from "../components/shared/pageTransition";
import { GitHubCalendar } from "react-github-calendar";

import { projects } from "../data/projectData";
import { fetchGitHubActivity, fetchGitHubProfile } from "../utils/github";

import "../styles/githubCalendar.css";

export default function Projects() {
  const [profile, setProfile] = useState(null);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    async function loadGitHubData() {
      const profileData = await fetchGitHubProfile();
      const activityData = await fetchGitHubActivity();

      setProfile(profileData);
      setActivity(activityData.slice(0, 5));
    }

    loadGitHubData();
  }, []);

  return (
    <PageTransition>
      <Card as="section">
        <h2>My Projects</h2>
        <p>
          A collection of projects showcasing my journey in web development.
          From interactive games to full-stack applications, each project
          represents a step forward in mastering new technologies and solving
          real-world problems.
        </p>
        {profile && (
          <div className="github-stats">
            <span>{profile.public_repos} repos</span>
            {" | "}
            <span>{profile.followers} followers</span>
          </div>
        )}
      </Card>
      <Card as="section">
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

      {activity && (
        <Card as="section" className="pf-projects-activity-wrapper">
          <h2>Recent Activity</h2>
          <GitHubCalendar
            username="david-rmason"
            hideTotalCount
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
                    <strong>{event.type}</strong>

                    {" in "}

                    <span>{event.repo.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      )}
    </PageTransition>
  );
}
