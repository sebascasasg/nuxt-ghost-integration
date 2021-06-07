import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '4b4b4d40a0585d10ae7fbf6e96',
  version: "v3"
});

export async function getPostsByTag(tag) {
    return await api.posts
      .browse({
        limit: "all",
        filter: `tag: ${tag}`
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }