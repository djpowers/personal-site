---
title: Optimal blog URL structure
date: 2024-05-14T03:00:00Z
---
I've been kicking around the idea of setting up some way of sharing my various musings here, but have procastinated due to various reasons. One was making sure the inaugural post was "worthwhile," and another my insistence to labor over exactly what pathing structure to use for the site. After all, [cool URI's don't change](https://www.w3.org/Provider/Style/URI).

Given the above, I figured I'd disregard the worthiness of such a topic, and summarize the findings from my deep dive on the subject, which mostly consisted of researching what notable sites or authors I generally trust or respect do.

## Why does this matter?
The easy answer here is that it will help for SEO reasons, but regardless of that, I think a a good URL will pretty clearly indicate to both computers and humans what sort of content the page will contain. Further, I think a clean and tidy URL indicates some thought and care has been put into the entire site design, and signals to me that any writing featured may also have that same attention to detail.

An ideal could be to have your site URLs short and logical enough to be entered by memory. Or, at least, able to be easily reminded via browser history hints.

Mini-spoiler: to skip to the conclusion I reached for this site, take a look at your address bar (assuming your modern browser hasn't hidden it).

## Options for paths
Here's where I really went down a rabbit hole compiling the different conventions I saw used here most often. In this post, I'm strictly speaking about the path part of the URL (everything after the single forward slash). I probably spent even more time debating which top-level domain to go with, or whether or not to omit the "www" from the URL, but I'll save those for a potential follow-up.

Below, the `[slug]` portion is a placeholder for some unique identifier of the blog post, typically a hyphenated, possibly abbreviated, version of the post's title. Bracketed elements imply a dynamic value, i.e., one that will differ from post to post.

Also I'll include some examples of each style. Where possible, I shared some meta links to post about this same subject.

### Blog path, no date: `/blog/[slug]`
This was one of the more common examples I came across. The inclusion of the word "blog" makes it safe to assume that following such a URL will take you to a blog post. It helps you keep the URL fairly short, while distinguishing this page from others on your site.

#### Examples
- <https://designpowers.com/blog/url-best-practices>
- <https://neilpatel.com/blog/complete-guide-structuring-urls/>
- <https://rknight.me/blog/eleventy-post-dates/>
- <https://www.codemzy.com/blog/best-blog-url-structure>
- <https://www.foundationsfirstmarketing.com/blog/blog-url-structure/>

### Blog path, with date: `/blog/[date]/[slug]`
This style was probably the next one I saw most often. This still clearly identifies the post page as being under the "blog" directory, and also includes the date, typically in YYYY/MM/DD format (though some would omit the day).

I like this for clearly indicating the date the content was written/published, and it could potentially save you a click if you see this before visiting a page. For example, if you're searching for a technical solution while using a long-standing library, conveying that a resource is a decade old is helpful information to have.

Including the date seems helpful if you are not writing evergreen content, and also if you do not intend to update it. That being said, regardless of your approach, you should include publish dates in the page content.

#### Examples
- <https://mjtsai.com/blog/2021/12/15/proposed-foundation-url-improvements/>
- <https://www.macsparky.com/blog/2024/04/tasks-are-stored-intentions/>
- <https://jvns.ca/blog/2019/08/27/curl-exercises/>
- <https://react.dev/blog/2024/04/25/react-19>
- <https://heydingus.net/blog/2024/1/please-own-your-rss-links>

### Date only: `/[date]/[slug]`
Not too dissimmilar from the above. Same benefit of embedding the date into the URL, but omitting the "blog" part of the path, whether to let it be implied this is a blog post, or maybe for more news-like or time-sensitive content.

I can see this also making sense for announcements rather than full-on blog posts. Despite the shorter length this format offers, I do like the idea of having some sort of parent directory to convey what all of the child items may be.

#### Examples
- <https://rubyonrails.org/2024/3/22/this-week-in-rails>
- <https://chriscoyier.net/2023/11/25/default-apps-2023/>
- <https://inessential.com/2024/02/04/why_netnewswire_isnt_available_for_vision_pro.html>
- <https://onefoottsunami.com/2024/05/06/come-on-sam-adams/>
- <https://marco.org/2022/03/25/overcast-redesign-2022>

### Resource type `/[resource]/[slug]`
This format uses the category of the piece, which can vary from post to post. So instead of "blog," you may have "reviews," "news," "sponsored," etc. to distinguish what type of resource the path represents.

This seems to work well if your content tends to fit cleanly into specific predefined categories. I also like the idea of being a bit more descriptive into what type of post a link leads to.

However, I think in most cases you'd be better served by having a tagging system. This would allow you to apply multiple categories, or easily change them in the future in case you add a new one or find a better way to categorize a piece. But baking this into the URL doesn't give you that flexibility.

#### Examples
- <https://blog.hubspot.com/marketing/guide-to-updating-republishing-blogging-content-ht>
- <https://www.bridgetownrb.com/future/road-to-bridgetown-2.0-escaping-burnout/>
- <https://www.zachleat.com/web/trailing-slash/>
- <https://ia.net/topics/all-new-shortcuts-ia-writer-7-1>
- <https://helix-editor.com/news/release-23-10-highlights/>

### Posts path: `/posts/[slug]`
This approach resonated with me partially because it more closely follows the [resourceful routing paradigm in Rails](https://guides.rubyonrails.org/routing.html#resource-routing-the-rails-default). Per the example in the Rails guides, you may have a "photos" directory or folder, and everything nested within would be a unique ID or slug to identify which photo you're referring to.

The specific resource is a "post," whereas the overarching collection or website is the "blog," so this seemed a bit more semantically correct to me. Despite this, it doesn't seem to be as common of a convention.

#### Examples
- <https://cassidoo.co/post/human-curation/>
- <https://kevinjmurphy.com/posts/tracks-not-at-railsconf-2024/>
- <https://colbyfayock.com/posts/2023-content-roundup-year-in-review/>
- <https://blog.testdouble.com/posts/2022-10-25-building-passwordless-email-auth-in-rails/>
- <https://www.ananunesdasilva.com/posts/exploring-viewcomponents>

### Flat: `/[slug]`
This structure just has the domain name immediately followed by a slug or identifier. If your goal is brevity, it doesn't get much shorter than this. For one extreme example, I have to specifically highlight Derek Sivers' blog and his post [Short URLs: why and how](https://sive.rs/su). This article  explains his rationale and how he aims to only use a few characters for each new published blog post.

One thing I don't like about this style is the ambguity it introduces. If I navigate to `/about`, is that a blog post? It sounds like a page about the other, but this blurs the lines. 

#### Examples
- <https://sive.rs/su>
- <https://flaviocopes.com/start-blog-with-hugo/>
- <https://www.codewithjason.com/productive-programming-day/>
- <https://nickang.com/why-i-removed-dates-from-my-blog-post-urls/>
- <https://wesbos.com/pool-in-your-url>

## Conclusion
So which option is best? First, consistency is most important. Pick one and stick with it. You _could_ change it in the future and maintain a handful or redirects, but it's best to avoid if you can.

After that, it depends on what sort of content you'll be housing. Will published pieces be tied to a specific point in time? If so you could make an argument to include dates in the URL. Will you be posting vastly different types of content with different audiences? Then you could segment the URLs by post category.

In most cases though, I think you'd be best served with the `/blog` or `/posts` strategy, omitting dates and tagging your content as you see fit. Having the word "blog" in the path is a very common convention and clearly indicates what resource will be available there, so that's the approach I decided to go with.
