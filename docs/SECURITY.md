# Security

## Client-side application

- Never place secrets, private API keys, or credentials in browser code or committed files.
- Treat all browser input and URL-derived data as untrusted.
- Avoid unsafe HTML injection APIs; render user-provided text as text.
- Use HTTPS for external production integrations.
- Open external links in new tabs only with appropriate `rel="noreferrer"` protection.
- Keep third-party dependencies necessary and current; review package changes before adding them.

## Contact and personal data

- The contact form sends through EmailJS to the configured portfolio email address.
- EmailJS browser integrations use a public key; never put a Gmail password, OAuth refresh token, or private server key in frontend code or `VITE_` variables.
- Restrict the EmailJS public key to the deployed site origin and configure provider-side abuse protections.
- Treat provider credentials as public configuration, not as authorization or a substitute for rate limiting.
- Replace personal-information placeholders only with details approved for public display.

## Database safety

This project currently has no database. If database access is added, read the root `Database.md` and obtain explicit approval before any destructive operation.
