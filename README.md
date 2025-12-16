# Bluesky Comments Web Component

A zero-dependency web component that displays Bluesky replies as blog comments. No framework, build step, or backend required. [Prior art!](https://emilyliu.me/blog/comments)

Feedback is great, managing comments can be a bit of a pain. Social media is fantastic way to promote your work, but then the conversation is separated from your original post.

This web component lets you grab the replies to your post right alongside your writing and includes all of the built-in features you get with Bluesky, like identity management and moderation. It even threads the conversation for you.

## Quick Start

### 1. Include the Web Component to your page or template where you want the comments to appear (typically bellow the post)

```html
<script type="module" src="bluesky-comments.js"></script>
<bluesky-comments post-uri="at://did:plc:vc7f4oafdgxsihk4cry2xpze/app.bsky.feed.post/3m7vviplew22r"></bluesky-comments>
```

### 2. Replace the value of `post-uri` with the URI of the post

TODO: make this easier, possibly just using the URL of the post without requiring the `at://` URI

## Styling

TODO: detail the CSS classes here

## How It Works

### Calling Bluesky's API

Bluesky provides a `getPostThread` API that accepts an AT Protocol URI of a post and (optionally) how many levels of nesting to retrieve (defaults to 10).

Because Bluesky allows cross-origin requests, calling this method directly from the browser does not create a security issue. This means you don't need to host a middleware app or script on your server to retrieve the replies in order to avoid CORS security issues, a common issue with calling third party APIs from the browser. Thanks, Bluesky!

## Use Cases

### Personal blogs
Blogs and social media have a natural symbiosis, but capturing the conversation from social media on the original post is hard. And managing comments with traditional blogging platforms adds overhead. Bluesky Comments allows you to take advantage of the tools provided by Bluesky, like identity and moderation, while keeping the conversation attached to your writing.

### Documentation
Capture the conversation, questions, and even bug reports around your docs.

### Static site generators
Because Bluesky Comments works as a Web Component with no separate build step, it's easy to integrate with static site generators like Hugo, Jekyll, and 11ty (TODO: include example templates)

### *Any* HTML page
Got a weekend project, zine, or just a fun website that you want to add comments to? All it takes is a few lines of HTML and one JavaScript file and you're ready to go.

## Contributions
This is a project of the Bluesky DevRel team. We welcome all but reports, feature requests, code improvements, ideas, documentation, critique, and questions.

## License

MIT — free to use for personal or commercial projects

## TODO
* [ ] Support threading
* [ ] Include more information from each post (avatar, link, timestamp)
* [ ] Implementation examples for common static site generators with an automatic post to Bluesky flow
