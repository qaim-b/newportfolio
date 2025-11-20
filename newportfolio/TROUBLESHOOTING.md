# Troubleshooting Guide

## SWC Dependencies Warning

If you see this warning:
```
⚠ Found lockfile missing swc dependencies, patching...
⚠ Lockfile was successfully patched, please run "npm install"
```

**Solution:**
```bash
# Delete node_modules and lockfile
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

This will create a proper `package-lock.json` with all required @next/swc dependencies.

## Mosque Icon Import Error

If you see this error:
```
Attempted import error: 'Mosque' is not exported from lucide-react
```

**Root Cause:** The `Mosque` icon doesn't exist in the `lucide-react` package.

**Solution:**

1. **If you're using lucide-react:** Replace `Mosque` with an available alternative icon:
   - Use `Building2` for religious buildings
   - Use `Landmark` for notable places
   - Use `Church` as an alternative worship place icon
   - See all available icons at: https://lucide.dev/icons/

2. **If lucide-react isn't installed but referenced:**
   ```bash
   # Install lucide-react
   npm install lucide-react
   ```

3. **Update your imports:**
   ```tsx
   // Instead of:
   import { Mosque } from 'lucide-react';  // ❌ Doesn't exist

   // Use:
   import { Building2 } from 'lucide-react';  // ✅ Works
   // or
   import { Landmark } from 'lucide-react';   // ✅ Works
   ```

## Clear Next.js Cache

If you're still experiencing issues after fixing imports:

```bash
# Delete .next build directory
rm -rf .next

# Restart the dev server
npm run dev
```

## Complete Reset

If problems persist:

```bash
# Stop the dev server (Ctrl+C)

# Clean everything
rm -rf node_modules package-lock.json .next

# Reinstall
npm install

# Restart
npm run dev
```

## Verification

After applying fixes, you should see:
```
✓ Ready in 2-3s
○ Compiling /
✓ Compiled successfully
```

## Notes

- The current codebase doesn't use `lucide-react` - if you're seeing this error, check if you have local uncommitted changes
- The `package-lock.json` is not committed to git, so you need to run `npm install` after cloning
- SWC is Next.js's fast compiler - the lockfile ensures all platform-specific binaries are downloaded
