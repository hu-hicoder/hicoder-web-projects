export interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  image: string;
}

const BLOG_BASE = 'https://blog.hicoder.one';
const RSS_URL = `${BLOG_BASE}/rss.xml`;

const THUMBNAIL_MAP: Record<string, string> = {
  'flutter-workshop-2024-app-development':
    '/flutter-workshop-2024-app-development/flutter-workshop-app-development-thumbnail.png',
  'flutter-workshop-2024-environment-setup':
    '/flutter-workshop-2024-environment-setup/flutter-workshop-thumbnail.png',
  'tried-making-web-app-fully-relying-on-ai':
    '/tried-making-web-app-fully-relying-on-ai/thumbnail.png',
};

const DEFAULT_THUMBNAIL = `${BLOG_BASE}/default-thumbnail.png`;

function slugFromLink(link: string): string {
  const parts = link.replace(/\/+$/, '').split('/');
  return parts[parts.length - 1];
}

function formatDate(rfc822: string): string {
  const d = new Date(rfc822);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}/${mm}/${dd}`;
}

function getText(item: Element, tag: string): string {
  const el = item.getElementsByTagName(tag)[0];
  return el ? (el.textContent ?? '') : '';
}

export async function fetchBlogPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(RSS_URL);
    if (!res.ok) return [];
    const xml = await res.text();
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const items = Array.from(doc.querySelectorAll('item'));

    return items
      .sort((a, b) => {
        const ta = new Date(getText(a, 'pubDate')).getTime();
        const tb = new Date(getText(b, 'pubDate')).getTime();
        return tb - ta;
      })
      .slice(0, limit)
      .map((item) => {
        const slug = slugFromLink(getText(item, 'link'));
        const imagePath = THUMBNAIL_MAP[slug] ?? null;
        return {
          title: getText(item, 'title'),
          description: getText(item, 'description'),
          url: `${BLOG_BASE}/${slug}/`,
          date: formatDate(getText(item, 'pubDate')),
          image: imagePath ? `${BLOG_BASE}${imagePath}` : DEFAULT_THUMBNAIL,
        };
      });
  } catch {
    return [];
  }
}
