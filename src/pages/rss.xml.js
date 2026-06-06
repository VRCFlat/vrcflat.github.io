import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const guides = await getCollection('guides');
  const sortedGuides = guides.sort((a, b) => a.data.stepNumber - b.data.stepNumber);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sortedGuides.map((guide) => ({
      title: `STEP ${guide.data.stepNumber}: ${guide.data.title}`,
      description: guide.data.description,
      link: `/guide/${guide.id}/`,
    })),
  });
}
