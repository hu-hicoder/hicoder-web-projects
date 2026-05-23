import { XMLParser } from 'fast-xml-parser';

export interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  image: string;
}

const BLOG_BASE = 'https://blog.hicoder.one';
const RSS_URL = `${BLOG_BASE}/rss.xml`;

// slug → heroImage path on blog.hicoder.one
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
  // RSS link has a known /blog/<slug>/ prefix bug — extract just the slug
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

export async function fetchBlogPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(RSS_URL, { cache: 'force-cache' });
    if (!res.ok) return [];
    const xml = await res.text();

    const parser = new XMLParser({ ignoreAttributes: false });
    const feed = parser.parse(xml);
    const items: Record<string, string>[] = [].concat(
      feed?.rss?.channel?.item ?? []
    );

    return items
      .sort(
        (a, b) =>
          new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      )
      .slice(0, limit)
      .map((item) => {
        const slug = slugFromLink(item.link ?? '');
        const imagePath = THUMBNAIL_MAP[slug] ?? null;
        return {
          title: item.title ?? '',
          description: item.description ?? '',
          url: `${BLOG_BASE}/${slug}/`,
          date: formatDate(item.pubDate ?? ''),
          image: imagePath ? `${BLOG_BASE}${imagePath}` : DEFAULT_THUMBNAIL,
        };
      });
  } catch {
    return [];
  }
}
