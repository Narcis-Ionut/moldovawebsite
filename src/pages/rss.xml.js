import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { blogPosts } from "../data/blogPosts";

export async function GET(context) {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: blogPosts.map((post) => ({
			title: post.title,
			description: post.description,
			pubDate: post.pubDate,
			...(post.updatedDate ? { updatedDate: post.updatedDate } : {}),
			link: `/blog/${post.slug}/`,
		})),
	});
}
