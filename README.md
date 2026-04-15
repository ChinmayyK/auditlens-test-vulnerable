# AuditLens Vulnerable Test Repo

Tiny intentionally vulnerable demo repository for testing AuditLens and security scanners.

All secrets and credentials in this repository are fake test values.

## What This Contains

- SQL injection patterns in `src/db.js`.
- Hardcoded fake secrets in `src/config.js`.
- Insecure HTTP and weak CORS behavior in `src/server.js`.
- Command injection patterns in `src/tasks.js`.

Do not deploy this application. It exists only as scanner test input.
