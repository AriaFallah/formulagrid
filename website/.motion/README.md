Welcome to your Motion folder!

Docs on Motion: https://motion.io/docs

This is the `.motion` folder. It's meant to stay out of your way, but it's not
off limits. The `.motion/.internal` folder is. If we're doing our jobs, you
should never need to touch it!

What's in here:

  - .internal/

  Motion uses this to run your app. Take a peek! If things are breaking badly,
  you can delete this folder to "reset" everything. Motion will still work.

  - static/

  Static is a bit odd. Ideally you put *everything* in your root folder
  (including assets), but we throw in a couple things here to keep them out of
  view. Namely, css. Basically, if you put it into your index.html directly
  (links or script), use the static folder. Motion automatically rewrites the
  URLs in index.html and copies the static stuff when you run `motion build`.

  - .gitignore

  Ensures you aren't committing internal stuff.

  - motion.json

  Config for Motion. Docs coming here: https://motion.io/docs/config

  - index.html

  This is your app index html file. Just don't remove the <!-- comments -->.
  You can drop in scripts or links if you need to here.

  - package.json

  Your npm packages. Motion writes to this as it manages your code. But you can
  still change it as you'd like.