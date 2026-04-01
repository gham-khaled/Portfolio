# Portfolio — Khaled Ghamgui

Personal portfolio website showcasing my skills, projects, and certifications as a Cloud Engineer.

**Live:** [ghamguikhaled.com](https://ghamguikhaled.com)

## Tech Stack

- **Framework:** Angular 19
- **UI:** Angular Material (M2 dark theme), Bootstrap 4 grid
- **Language:** TypeScript 5.6
- **Testing:** Playwright (e2e with screenshots)
- **CI/CD:** GitHub Actions with AWS OIDC authentication
- **Hosting:** AWS S3

## Getting Started

```bash
# Install dependencies
npm ci

# Start dev server
ng serve

# Production build
ng build --configuration production

# Run e2e tests
npx playwright test
```

## Project Structure

```
src/
  app/
    components/     # Reusable UI components (skill cards, project cards, etc.)
    pages/          # Route pages (home, blog)
    services/       # Shared services
  assets/
    skills/         # Skill icons (PNG/SVG)
    projects/       # Project screenshots
  styles.scss       # Global styles and Material theme
e2e/
  playwright.test.ts  # Visual regression and functional tests
```

## Deployment

Pushes to `master` trigger a GitHub Actions workflow that builds the project and syncs to S3 using OIDC — no static AWS credentials stored.
