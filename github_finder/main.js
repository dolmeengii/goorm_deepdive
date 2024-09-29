class Users {
  constructor() {
    this.basicUrl = "https://github.com/users/";
    this.client_id = "Iv23liZukT0Mbzseapta";
    this.client_secrets = "4749ca2afc2db256f5311314189fe16b833ae114";
  }

  async userInfo(userName) {
    // profile 을 가져오는 API 요청
    const requestProfile = await fetch(
      `${this.basicUrl}${userName}?client_id=${this.client_id}&client_secrets=${this.client_secrets}`,
      { credentials: "include" }
    );
    const profile = await requestProfile.json();

    if (profile) console.log("profile---ok");
    else console.log("profile 실패");

    // repos 를 가져오는 API 요청
    const requestRepos = await fetch(
      `${this.basicUrl}${userName}/repos?client_id=${this.client_id}&client_secrets=${this.client_secrets}`,
      { credentials: "include" }
    );
    const repos = await requestRepos.json();

    if (repos) console.log("repos---ok");
    else console.log("repo 실패");

    return { profile, repos };
  }
}

class Infos {
  showProfile(user) {
    const profileHTML = `
        <div class="img-box">
            <img class="profile-img">
            <button class="profile-btn">
                <a href="">View Profile</a>
            </button>
        </div>
        <div class="profile-box">
            <div class="profile-info-box">
                <div class="public-repos">Public Repos: ${user.public_repos}</div>
                <div class="public-gists">Public Gists: ${user.public_gists}</div>
                <div class="followers">Follewers: ${user.followes}</div>
                <div class="following">Following: ${user.following}</div>
            </div>
            <div class="profile-description-box">
                <li>Company: ${user.company}</li>
                <li>Website/Blog: ${user.blog}</li>
                <li>Location: ${user.location}</li>
                <li>Member Since: ${user.created_at}</li>
            </div>
        </div>
        `;

    document.getElementByClassName("user-profile-box-container").innerHTML =
      profileHTML;
  }

  showRepos(repos) {
    const reposHTML = repos.forEach((repo) => {
      `
            <p class="repo-name"><a href="${repo.html_url}">${repo.name}</a></p>
            <div class="repo-info-box">
                <div class="stars"> Stars: ${repo.stargazers_count}</div>
                <div class="watchers"> Watchers: ${repo.watchers_count}</div>
                <div class="forks">Forks: ${repo.forks_count}</div>
            </div>
        `;
    });

    document.getElementByClassName("latest-repo-box").innerHTML = reposHTML;
  }
}

const user = new Users();
const info = new Infos();
const input = document.getElementById("search-input-box");
const submitBtn = document.getElementById("submit-btn");

document.getElementById("submit-btn").addEventListener("click", () => {
  const inputText = input.value;

  if (inputText === "") {
    return;
  }

  user.userInfo(inputText).then((data) => {
    info.showProfile(data.profile);
    info.showRepos(data.repos);
  });
});
