# Setup Instructions

## 1. Install Dependencies

First, make sure Tailwind CSS and its dependencies are installed:

```bash
npm install
```

This will install:
- `tailwindcss` - The Tailwind CSS framework
- `postcss` - CSS processor
- `autoprefixer` - Vendor prefixer

## 2. Start Development Server

```bash
npm run dev
```

## 3. If CSS Still Not Working

If Tailwind styles aren't appearing after installation:

1. **Stop the dev server** (Ctrl+C)
2. **Delete node_modules and package-lock.json** (if exists):
   ```bash
   rm -rf node_modules package-lock.json
   ```
3. **Reinstall**:
   ```bash
   npm install
   ```
4. **Restart dev server**:
   ```bash
   npm run dev
   ```

## Troubleshooting

- Make sure `src/index.css` is imported in `src/main.tsx` (it should be)
- Check browser console for any errors
- Verify that `postcss.config.mjs` and `tailwind.config.js` exist in the root directory
- Ensure Vite is processing CSS correctly (it should automatically with PostCSS)
