# Habtamu Molla — Personal Portfolio

Personal portfolio website of **Habtamu Molla** — Full Stack Developer, AI Engineer, and Network & IoT Security Researcher based in Addis Ababa, Ethiopia.

🔗 **Live site:** https://habtamariam.github.io

---

## About

This site brings together my work across several connected roles:

- **Full Stack Development** — enterprise dashboards and government platforms (ICSMIS, SmartOffice, North Gondar Zone website)
- **AI Engineering & Research** — machine learning for IoT/network security, published in IEEE Access
- **Teaching** — Information Technology & Computer Networks, Ethiopian Public Service University
- **Training** — SNA Africa Project Training-of-Trainers graduate in digital public administration
- **Business Analysis & Consulting** — requirements engineering for national enterprise platforms

## Features

- 🖱️ **Interactive role network** on the homepage — click any role (Full Stack Developer, AI Engineer, Researcher, Lecturer, Consultant, Trainer, Business Analyst) to jump straight to that story
- 📰 **Blog / News feed** with category filters, a "Recent Posts" widget, expandable "Read More" entries, and a native Share button
- 🗺️ **Live, clickable map** of the Ethiopian Public Service University campus
- ✉️ **Contact form** that opens a pre-filled email to me directly — no backend required
- 📄 **One-click CV download**
- 📱 Fully responsive — desktop, tablet, and mobile
- ⚡ Clean, extension-free URLs (`/about`, `/contact`, etc.)

## Pages

| Page | Description |
|---|---|
| `index.html` | Home — interactive role network, flagship project, quick overview |
| `blog.html` | News & career announcements, filterable by topic |
| `about.html` | Full background, academic foundation, research interests, location map |
| `education.html` | Academic history with grade highlights (MSc 4.0/4, BSc 3.91/4) |
| `experience.html` | Full work & teaching timeline |
| `projects.html` | Selected projects with live links |
| `research.html` | Publications and peer-review record |
| `training.html` | ToT credential and training topics I can deliver |
| `skills.html` | Technical skills, grouped by category |
| `contact.html` | Contact form, direct links, and location map |

## Tech Stack

Plain **HTML, CSS, and vanilla JavaScript** — no build step, no framework dependency, no external database. Fonts via Google Fonts, icons via Font Awesome, map via Google Maps embed. Fully static, so it runs anywhere: GitHub Pages, Netlify, or a local double-click.

```
habtamariam.github.io/
├── index.html
├── blog.html
├── about.html
├── education.html
├── experience.html
├── projects.html
├── research.html
├── training.html
├── skills.html
├── contact.html
└── assets/
    ├── styles.css
    ├── main.js
    ├── habtamu.jpg
    └── Habtamu_Molla_CV.pdf
```

## Running Locally

No installation needed — just open `index.html` in a browser. For nav/link behavior to match production exactly, you can also serve it locally:

```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Updating Content

Everything is plain HTML — no build step required:

- **Add a news post:** open `blog.html`, copy one `<article class="news-card">…</article>` block, paste it at the top of the feed, and edit the date, category, title, and text.
- **Update any other page:** edit the relevant `.html` file directly and save.
- **Replace the CV:** swap `assets/Habtamu_Molla_CV.pdf` with a new file of the same name.

## Deployment

Hosted free on **GitHub Pages**, served directly from the `main` branch:

`Settings → Pages → Source: Deploy from a branch → Branch: main / (root)`

Any push to `main` updates the live site within about a minute.

## Contact

- Email: habtamumullu@gmail.com
- LinkedIn: https://www.linkedin.com/in/habtamu-molla-511308353/
- GitHub: https://github.com/Habtamariam

---
Powered By Habtamu Molla, Addis Ababa, Ethiopia.
