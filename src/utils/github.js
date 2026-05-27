const GITHUB_USERNAME = "david-rmason";

export async function fetchGitHubProfile() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
    );
    if (!response.ok) {
      throw new Error(`GitHub profile request failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub Profile", error);
    return null;
  }
}

export async function fetchGitHubActivity() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events`,
    );
    if (!response.ok) {
      throw new Error(`GitHub activity request failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed fetching GitHub Activty", error);
    return [];
  }
}
