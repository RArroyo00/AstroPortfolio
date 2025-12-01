interface TechCategory {
  category: string;
  badges: [string, string][];
}

const techData: TechCategory[] = [
  {
    category: "Project Management and Methodologies",
    badges: [
      ["Agile", "agile"],
      ["Jira", "jira"],
      ["Asana", "asana"],
      ["Microsoft Project", "microsoft-project"],
    ],
  },
  {
    category: "Networking and Protocols",
    badges: [
      ["TCP/IP", "cisco"],
      ["HTTP/HTTPS", "http"],
      ["RESTful APIs", "rest"],
      ["GraphQL", "graphql"],
    ],
  },
  {
    category: "Cloud Computing",
    badges: [
      ["AWS", "amazon-aws"],
      ["Google Cloud", "google-cloud"],
      ["Microsoft Azure", "microsoft-azure"],
    ],
  },
  {
    category: "Programming Languages",
    badges: [
      ["BrightScript", "roku"],
      ["C#", "csharp"],
      ["C++", "cplusplus"],
      ["CSS", "csswizardry"],
      ["Compose Multiplatform", "jetpackcompose"],
      ["Dart", "dart"],
      ["Go", "go"],
      ["Gradle", "gradle"],
      ["HTML5", "html5"],
      ["Java", "java"],
      ["JavaScript", "javascript"],
      ["Kotlin", "kotlin"],
      ["Kotlin Multiplatform", "kotlin"],
      ["LaTeX", "latex"],
      ["Markdown", "markdown"],
      ["PHP", "php"],
      ["Python", "python"],
      ["Rust", "rust"],
      ["Ruby", "ruby"],
      ["SceneGraph", "roku"],
      ["Shell Script", "gnu-bash"],
      ["Swift", "swift"],
      ["TypeScript", "typescript"],
    ],
  },
  {
    category: "Frameworks and Libraries",
    badges: [
      ["Angular.js", "angularjs"],
      ["Astro", "astro"],
      ["Bootstrap", "bootstrap"],
      ["Django", "django"],
      ["Express.js", "express"],
      ["FastAPI", "fastapi"],
      ["Flutter", "flutter"],
      ["Google Maps", "googlemaps"],
      ["Google Pay", "googlepay"],
      ["Google Wallet", "googlepay"],
      ["In App Purchases", "googlepay"],
      ["Jetpack Compose", "jetpackcompose"],
      ["jQuery", "jquery"],
      ["React", "react"],
      ["Riverpod", "riverpod"],
      ["Spring Boot", "springboot"],
      ["Vue.js", "vue.js"],
      ["Wear OS", "google"],
      ["WordPress API", "wordpress"],
    ],
  },
  {
    category: "Databases",
    badges: [
      ["Amazon DynamoDB", "amazon-dynamodb"],
      ["Couchbase", "couchbase"],
      ["Drift DB", "sqlite"],
      ["Firebase", "firebase"],
      ["Microsoft SQL Server", "microsoftsqlserver"],
      ["MongoDB", "mongodb"],
      ["MySQL", "mysql"],
      ["Postgres", "postgresql"],
      ["SQLite", "sqlite"],
      ["Supabase", "supabase"],
    ],
  },
  {
    category: "CI/CD",
    badges: [
      ["GitLab CI/CD", "gitlab"],
      ["GitHub Actions", "githubactions"],
      ["Harness", "harness"],
      ["Jenkins", "jenkins"],
    ],
  },
  {
    category: "Other Tools",
    badges: [
      ["Adobe", "adobe"],
      ["Adobe Creative Cloud", "adobe-creative-cloud"],
      ["Adobe Dreamweaver", "adobe"],
      ["Adobe Illustrator", "adobeillustrator"],
      ["Adobe Photoshop", "adobephotoshop"],
      ["Android Studio", "android-studio"],
      ["Apple", "apple"],
      ["Arduino", "arduino"],
      ["Audacity", "audacity"],
      ["Bitbucket", "bitbucket"],
      ["Canva", "canva"],
      ["Discord", "discord"],
      ["Eclipse IDE", "eclipseide"],
      ["Figma", "figma"],
      ["Firebase App Distribution", "firebase"],
    ],
  },
];

const BADGE_BG = "F7F6F4";
const LOGO_COLOR = "3F3A35";

export function badge(label: string, logo: string) {
  return `https://img.shields.io/badge/${encodeURIComponent(
    label,
  )}-%23${BADGE_BG}.svg?style=for-the-badge&logo=${logo}&logoColor=${LOGO_COLOR}`;
}

export default techData;
