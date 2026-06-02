import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { fetchGitHubActivity } from "../../utils/github";

export default function RecentActivity() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    async function loadGitHubData() {
      const activityData = await fetchGitHubActivity();
      setActivity(activityData.slice(0, 5));
    }

    loadGitHubData();
  }, []);
  return (
    <>
      {activity && (
        <article className="pf-projects-activity-wrapper">
          <h3>Recent Activity</h3>
          <div className="pf-projects-activity-content">
            <GitHubCalendar
              className="pf-github-calendar"
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

            <div className="pf-github-activity">
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
        </article>
      )}
    </>
  );
}
