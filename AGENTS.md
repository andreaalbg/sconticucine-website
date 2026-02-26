# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 14 marketing website (Italian kitchen discount company). It is a single self-contained web app with no external services, databases, or API keys required.

### Running the app

- **Dev server**: `npm run dev` (port 3000)
- **Lint**: `npm run lint`
- **Build**: `npm run build`

See `README.md` and `QUICK_START.md` for additional docs.

### Notes

- No `.env` file is required for development; environment variables are only used for optional Google Analytics.
- The `setup.sh` script references `.env.example` which does not exist in the repo; this is harmless and can be ignored.
- There are no automated tests in this project (no test framework or test files).
- One product image (`shabby-chic.jpg` / Stile Moderno) is missing from `public/images/`, so it renders as a broken image alt-text. This is a pre-existing asset gap, not a code bug.
