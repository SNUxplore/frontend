# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)


## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev # or yarn dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

It is suggested to use VS Code for this project. Remix does not support css pre-processors out of the box so we are using [Sass](https://sass-lang.com/) to compile our SCSS files into CSS. 

The compiled CSS files will reside in the same directory as the SCSS files. To avoid confusion, I made a workspace setting for vscode that hides the compiled CSS files within VS Code. So while importing the stylesheets, you'll have to import the file with the extension .css.

If you are using some other IDE, please look for a way to hide the compiled CSS files so you won't have any confusion.
