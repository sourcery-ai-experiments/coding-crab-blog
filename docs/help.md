# Help/ Cheatsheet 

## Hidden Post

_How to create a post that is not searchable, not shows in posts and not in sitemap_

1. Set a permalink that the post can be accessed by url: `permalink: /path/to/post-name/`
2. Set `search: false` to exclude post from search
3. Set `sitemap: false` to exclude post from sitemap
4. Set `hidden: true` to exclude post from posts

## Teaser Image

_How to add a teaser image to a post_

1. Add a teaser image to the post folder
2. add Yaml front matter
```yaml
header:
  teaser: /assets/images/posts/path/to/teaser-image.jpg
```
