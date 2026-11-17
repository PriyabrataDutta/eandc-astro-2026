// Blog posts: one Markdown file per post in src/content/blog/. Covers are made by scripts/blog-covers.mjs.
const files = import.meta.glob('../content/blog/*.md', { eager: true });

export const posts = Object.entries(files)
  .map(([file, m]) => ({
    slug: file.split('/').pop().slice(0, -3),
    ...m.frontmatter,
    cover: `/image/blog/${file.split('/').pop().slice(0, -3)}.jpg`,
    minutes: Math.max(1, Math.round(m.rawContent().split(/\s+/).length / 200)),
    Content: m.Content,
  }))
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export const longDate = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
