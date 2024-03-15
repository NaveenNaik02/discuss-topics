## Project Title

Next.js App app where users can engage in discussions and conversations on various topics

## Installation

Install my-project with npm

```bash
  npm install
  npx prisma migrate dev
  npm run dev
```

Create OAuth app in github and add callback as

```bash
http://localhost:3000/api/auth/callback/github
```

create .env.local file add these secrets and add these secrets

```bash
GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTH_SECRET
```
