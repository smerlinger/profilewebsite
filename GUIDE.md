# How to update your site

Plain-English guide for the two things you'll do most: **writing blog posts** and **adding photos**.

Your site rebuilds and goes live automatically about a minute after you save a change on GitHub. You never touch code or run anything.

---

## Part 1 — Writing a blog post

A blog post is just one text file written in **Markdown** (a simple way to format text). The easiest way to add one is right on GitHub — no software to install.

### The 6 steps

1. Go to your posts folder:
   **https://github.com/smerlinger/profilewebsite/tree/main/src/content/blog**
2. Click **Add file → Create new file** (top right).
3. Name the file with a short, dash-separated title ending in `.md`, e.g.
   `why-i-run.md`
   👉 The file name becomes the web address: `shaunsmerling.com/writing/why-i-run`
4. Paste this template in and edit it:

   ```markdown
   ---
   title: Why I Run
   date: 2026-07-28
   description: A short one-sentence summary shown in previews.
   ---

   Write your post here. Leave a blank line between paragraphs.

   ## This is a subheading

   Another paragraph.
   ```

   The part between the `---` lines is the "info card" for the post. Always keep
   `title` and `date`. `description` is optional.
5. Scroll down, click the green **Commit changes** button.
6. Wait about a minute. It's live at **shaunsmerling.com/writing** (newest first).

### Not ready to publish?

Add `draft: true` under the date and it stays hidden from the site until you remove it:

```markdown
---
title: Half-Finished Thought
date: 2026-07-28
draft: true
---
```

### Formatting cheat sheet (Markdown)

| You type | You get |
|---|---|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `## Big heading` | a section heading |
| `> quoted line` | an indented quote |
| `[link text](https://example.com)` | a link |
| `- item` (one per line) | a bullet list |
| `![photo caption](/photos/beach.jpg)` | an image (see Part 2) |

That's everything. Blank lines separate paragraphs — that's the main thing to remember.

---

## Part 2 — Adding photos

Your photos live **inside the site** in the `public/photos` folder. Anything in there is reachable on the web at `/photos/<filename>`. Two places you might use them:

### A) The Photos page (the gallery)

1. **Resize first (important).** Photos straight from a camera or phone are huge
   (5–13 MB each). That makes the site slow and bloats the project. Resize them to
   about **2000 pixels wide** and save as JPG (~80% quality). On a Mac you can select
   the images in Preview → *Tools → Adjust Size*, or just ask me to batch-resize a folder.
2. Upload them: go to
   **https://github.com/smerlinger/profilewebsite/tree/main/public/photos**
   → **Add file → Upload files** → drag your resized photos in → **Commit changes**.
3. Tell the page to show them: open
   **`src/pages/photos.astro`** on GitHub, click the pencil ✏️ to edit, and add a line
   inside the `photos` list for each image:

   ```js
   const photos = [
     { src: '/photos/kyoto-spring.jpg', alt: 'Cherry blossoms in Kyoto' },
     { src: '/photos/morning-run.jpg',  alt: 'Sunrise over the trail' },
   ];
   ```

   `src` is the file name with `/photos/` in front. `alt` is a short description
   (used for accessibility and if the image fails to load).
4. Commit. The gallery updates in about a minute.

### B) A photo inside a blog post

1. Upload the (resized) image to the same `public/photos` folder as above.
2. In your post's Markdown, drop it in wherever you want it:

   ```markdown
   Here's the view from the top:

   ![The view from the summit](/photos/summit.jpg)
   ```

That's it — same folder, referenced two different ways.

---

## Editing on your Mac instead (optional)

The whole project also lives on your computer at `~/Desktop/shaunsmerling.com`. If you'd
rather write in a real editor, edit the files there and publish with:

```bash
cd ~/Desktop/shaunsmerling.com
git add -A
git commit -m "New post"
git push
```

To preview locally before publishing: `npm run dev`, then open http://localhost:4321.

---

## If something looks broken

- Give it 1–2 minutes — the site rebuilds after each change.
- Check the file's top section has both `---` lines and a `title` and `date`.
- Still stuck? The build status shows up on the commit at
  github.com/smerlinger/profilewebsite/commits/main (a ✗ means the build failed).
