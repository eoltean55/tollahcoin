# AGENTS.md

## Cursor Cloud specific instructions

This is a minimal static website (a cryptocurrency token landing page). There is no build system, no package manager, no test framework, and no linting tools.

### Running the development server

Serve the site locally with Python's built-in HTTP server:

```
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080/index.html` in a browser.

### Key notes

- The entire site is a single `index.html` with inline CSS/JS plus a `logo.png` image.
- There are no dependencies to install, no build step, and no automated tests.
- The `IRAN` file is a placeholder HTML file.
- The only interactive element is the "Copy Address" button which uses `navigator.clipboard.writeText`.
