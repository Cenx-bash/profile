const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    category: "FULL STACK",
    description: "Modern e-commerce solution built with React, Node.js, and MongoDB...",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    rating: 4.9,
    year: "2024",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    name: "AI Chat Application",
    category: "REACT & AI",
    description: "Real-time chat application with AI integration...",
    tech: ["React", "WebSocket", "OpenAI", "Express"],
    rating: 4.8,
    year: "2024",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    category: "DATA VISUALIZATION",
    description: "Interactive business intelligence dashboard...",
    tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    rating: 4.7,
    year: "2023",
    github: "#",
    live: "#"
  }
];

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 90 },
  { name: "Database Design", level: 85 },
  { name: "Cloud Architecture", level: 88 }
];

let currentProject = 0;
const category = document.getElementById("project-category");
const rating = document.getElementById("project-rating");
const nameEl = document.getElementById("project-name");
const desc = document.getElementById("project-description");
const tech = document.getElementById("project-tech");
const year = document.getElementById("project-year");
const githubLink = document.getElementById("github-link");
const liveLink = document.getElementById("live-link");
const dotsContainer = document.getElementById("project-dots");

function renderProject() {
  const p = projects[currentProject];
  category.textContent = p.category;
  rating.textContent = "⭐".repeat(Math.floor(p.rating)) + ` ${p.rating}`;
  nameEl.textContent = p.name;
  desc.textContent = p.description;
  tech.innerHTML = p.tech.map(t => `<span>${t}</span>`).join("");
  year.textContent = p.year;
  githubLink.href = p.github;
  liveLink.href = p.live;
  dotsContainer.innerHTML = projects.map((_, i) =>
    `<span class="${i === currentProject ? 'active' : ''}" onclick="goToProject(${i})"></span>`
  ).join("");
}

function goToProject(i) {
  currentProject = i;
  renderProject();
}
document.getElementById("next-btn").onclick = () => {
  currentProject = (currentProject + 1) % projects.length;
  renderProject();
};
document.getElementById("prev-btn").onclick = () => {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  renderProject();
};

// Render skills
document.getElementById("skills-list").innerHTML = skills.map(s => `
  <div class="skill">
    <div style="display:flex;justify-content:space-between">
      <span>${s.name}</span><span>${s.level}%</span>
    </div>
    <div style="background:#1f2937;height:6px;border-radius:50px">
      <div style="width:${s.level}%;background:linear-gradient(90deg,#2563eb,#06b6d4);height:100%;border-radius:50px"></div>
    </div>
  </div>
`).join("");

renderProject();
