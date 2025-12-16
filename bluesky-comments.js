/**
 * Bluesky Comments
 */

class BlueskyComments extends HTMLElement {
  async connectedCallback(){
    const uri = this.getAttribute('post-uri');

    const res = await fetch(
      `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${uri}`
    );
    const data = await res.json();

    this.innerHTML = data.thread.replies
      .map(r => `<p><strong>${r.post.author.handle}:</strong> ${r.post.record.text}</p>`)
      .join('')
  }
}

customElements.define('bluesky-comments', BlueskyComments);
