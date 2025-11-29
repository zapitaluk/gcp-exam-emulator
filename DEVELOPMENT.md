# Development Notes

## Version Management

**IMPORTANT**: Increment the patch version (third number) in `package.json` with **every commit** that includes user-facing changes.

Example: `0.1.1` → `0.1.2` → `0.1.3`

Use semantic versioning:
- **Patch** (0.0.X): Bug fixes, minor UI adjustments, small improvements
- **Minor** (0.X.0): New features, significant changes
- **Major** (X.0.0): Breaking changes

## Deployment

After committing changes:
```bash
git push           # Updates Vercel automatically
npm run deploy     # Updates GitHub Pages manually
```

See [deployment_guide.md](file:///C:/Users/David/.gemini/antigravity/brain/3085e842-a00f-47dc-b7cc-918087fa035b/deployment_guide.md) for full deployment instructions.
