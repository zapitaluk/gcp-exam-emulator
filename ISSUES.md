# Outstanding Issues

> **IMPORTANT**: Review and resolve outstanding issues in this file before adding new features.

---

## Issue #1: Logo Size Proportion ⚠️ BLOCKED

**Status**: Open - Needs fresh approach  
**Priority**: High  
**Created**: 2025-11-30  
**Version**: v0.1.7

### Problem
The Zapital logo in the exam header appears too small compared to the combined height of the two-line title ("Cloud Digital Leader" + "Webassessor Simulation").

### What We've Tried

| Size | Result | User Feedback |
|------|--------|---------------|
| h-10 (40px) | Too small | ❌ Too small |
| h-12 (48px) | Matches measured text height (28px + 20px) | ❌ Still too small visually |
| h-14 (56px) | Slightly larger | ❌ Too small |
| h-16 (64px) | Moderate increase | ❌ Too small (current state) |
| h-18 (72px) | Larger, increases header height | ❌ Way too big |
| h-20 (80px) | Much larger | ❌ Too big, increases header height |

### Root Cause Analysis
1. **Whitespace removed**: Logo image was cropped to remove excess whitespace (v0.1.5)
2. **DOM measurement vs visual**: Measuring DOM element heights (48px text) doesn't match visual perception
3. **Header height constraint**: User wants logo proportional but WITHOUT increasing header bar height
4. **Goldilocks problem**: h-14 too small, h-18 too big, h-16 is back to too small

### Constraints
- ✅ Must be visually proportional to two-line title
- ✅ Must NOT increase the header bar height
- ✅ Current header uses `py-4` (1rem/16px padding)

### Next Steps for Tomorrow
1. **Option A - Reduce text size**: Make title text slightly smaller so current logo feels proportional
2. **Option B - Adjust padding**: Reduce header padding to allow bigger logo without height increase
3. **Option C - Visual weight**: Try h-17 (68px) as middle ground between 64px and 72px
4. **Option D - Font sizing**: Check if title font-weight can be reduced to make logo feel more balanced

### Files Affected
- `src/components/ExamRunner.jsx` (line ~115)
- `src/components/ExamSelector.jsx` (line ~8)
- `public/zapital-logo.png` (cropped version)

### Screenshots for Reference
- Current state (h-16): See browser recording from 2025-11-30
- Comparison shots available in artifacts folder

---

*Add new issues below this line*
