
## CI

This project uses GitHub Actions for continuous integration. On every push and pull request, the pipeline will:

1. Checkout the code
2. Setup Node.js 20
3. Install dependencies via `npm ci`
4. Run ESLint

## Contributing

### Branch naming

Always create a new branch from `main` for every change. Never push directly to `main`.

| Type           | Pattern                         | Example               |
| -------------- | ------------------------------- | --------------------- |
| New feature    | `feature/<short-description>` | `feature/user-auth` |
| Bug fix        | `fix/<short-description>`     | `fix/login-crash`   |
| Chore / config | `chore/<short-description>`   | `chore/update-deps` |

### Workflow

1. Pull the latest `main` before creating a branch:

```bash
   git checkout main
   git pull origin main
```

2. Create your branch:

```bash
   git checkout -b feature/your-feature-name
```

3. Make your changes and commit:

```bash
   git add .
   git commit -m "feat: describe what you did"
```

4. Run lint locally before pushing:

```bash
   cd backend
   npm run lint
```

   Fix all errors before proceeding.

5. Push your branch:

```bash
   git push origin feature/your-feature-name
```

6. Open a Pull Request on GitHub targeting `main`.

### Rules

- No direct pushes to `main` — PRs only.
- At least **1 approval** required before merging.
- CI (lint) must pass before merging.
- Run lint locally before pushing.
- Delete your branch after merging.

### Commit message format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix        | Use for                          |
| ------------- | -------------------------------- |
| `feat:`     | New feature                      |
| `fix:`      | Bug fix                          |
| `chore:`    | Maintenance / config             |
| `docs:`     | Documentation changes            |
| `refactor:` | Code refactor, no feature change |

### Enforced on GitHub

The `main` branch is protected:

- Direct pushes are blocked
- PRs require at least 1 approval
- CI must pass before merging
