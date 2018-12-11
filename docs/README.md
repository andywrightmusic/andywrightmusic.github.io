# andywrightmusic.com

This is the development guide for creating and publishing static content to andywrightmusic.com.

## Requirements

To develop / write content for this site you will need:

* a Github account with write access to the repository ( https://github.com/andywrightmusic/andywrightmusic.github.io )
* a text editor to use ( some examples below )
     - Sublime Text ( https://www.sublimetext.com/ )
     - Atom ( https://atom.io/ )
     - VS Code ( https://code.visualstudio.com/ )
     - NotePad++ ( https://notepad-plus-plus.org/ )
* an image editing tool


## To Start

You will need to pull down the code from the Github repository. To do this, use



## Structure of code ( where to find things )

The content of the site is laid out in specific directories.

This content is all stored under the `collections` directory in the root of the project.

Inside of this directory we have:

* `_portfolio` - this contains all portfolio items
* `_portfolio_categories` - this contains all categories used to separate / filter the portfolio items
* `_posts` - this contains all blog post entries

### Portfolio Categories

The items within the `_portfolio_categories` folder are fairly simple empty text files that dictate what categories are used on the site when the user visits `https://www.andywrightmusic.com/portfolio/`.

```
---
layout: category_portfolio
title: Production &amp; Mixing
class: production_mixing
permalink: /production-mixing
order: 1
---
```

In the above example, the `layout` value dictates what layout file will be used to render the content. For categories, this is always `category_portfolio`.

You need to provide a `title` for the category, and a lowercase "slug" version (a URL friendly version) to be used as the `permalink` value. URL friendly links tend to have hyphens separating content, whereas the `class` value uses an underscore, although you could duplicate the hyphenated version for that too if it's easier.

Finally, the `order` value dictates what order the categories are displayed in as menu items on the page.

The `class` value is important to include, as when the user clicks on a category name from the top menu, the `class` name value is used to dynamically filter only the entries associated with this category.

### Portfolio Items

The portfolio items cover all items that are displayed on the home page as well as other content that are marked under the specific categories:

* commercials
* production and mixing
* programming
* songwriting collaborations
* soundtracks

To create a new portfolio item, simply create a new file within the `collections/_portfolio` directory, using the hyphenated string of lowercase characters. For example:

```
echo-and-the-bunnymen-the-stars-the-oceans-and-the-moon.md
```

Once the file is created, you will first need to add in the YAML front matter meta content. Here's an existing example:


```
---
layout: portfolioItem
title: Echo &amp; the Bunnymen - The Stars, The Oceans &amp; The Moon
permalink: /portfolio/echo-and-the-bunnymen-the-stars-the-oceans-and-the-moon/
thumbnail: /assets/img/portfolio_headers/echo-and-the-bunnymen-the-stars-the-oceans-and-the-moon.jpg
category: production_mixing
date: 10 October 2018
homepage: true
homepageOrder: 1
---
```

The `layout` dictates what layout template will be used. For portfolio items we use `portfolioItem`.

The `title` value is the title of the portfolio item that will be displayed to the user.

The `permalink` value is the URL that the user will see in the browser to navigate to the entry. These are always prefixed with `/portfolio` for this content type, and the string following it must be lowercase and hyphenated to create a URL friendly value.

The `thumbnail` value is a relative path to the image used as the thumbnail item (on the home page). For album covers these are cropped and saved as 225px x 240px. You will have to crop these locally and save them to the `/assets/img` driectory, inside of which is a `portfolio_headers` directory to separate out the images to help make them easier to find.

The `category` value must match one of the category names created for the portfolio items.

The `date` value is the date you wish to apply to the portfolio item.

The `homepage` value, if provided and set to `true` will let the system know that when it compiles it should add this entry onto the homepage.

The `homepageOrder` value dictates what position the portfolio item should hold on the front page.

Any content added to the file after the `---` closing front matter lines will be deemed as content visible to the user.


### Creating Blog Posts

When you create a new blog post the most important thing to do is create the file name with the full date first (in `YYYY-MM-DD` format) followed by a URL-friendly name that matches the title of the blog post itself. This URL friendly name will be used as the actual URL for the blog post entry when users view it in the browser.

For example:

`2018-10-10-my-blog-post-entry.md`

All blog post entries must use the `.md` file extension so that the system, when compiling, can format the Markdown text used in the content.

When you have your blog post entry open, it must have front matter meta information at the top:

```
---
layout: post
title:  "Tribute to Toše Proeski"
date:   2008-01-20 14:02:36 +0300
thumb: /assets/img/posts/ToeProeski.jpg
categories:
 - press-articles
 - artists
 - news
---
```

The `layout` must always be set to `post` so the system can use the correct layout file.

The `title` will be the text displayed to the user.

The `date` will be used to display against the post title.

The `thumb` value is a relative file path to whatever thumbnail / image you wish to use.

** NOTE: You can see that all images are stored in the `assets/img` directory in the root of the project, and images for blog posts are saved in the `posts` directory.

The `categories` entry is a list of category names that you would like to apply to the post. The system, when compiling the code, will use these values and automatically create the category listing pages to display all posts that match a specific category.

Once you have added in the front matter meta information, anything below the closing `---` lines will be deemed as content for the actual blog post.