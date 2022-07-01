# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Hosting

The dev site is hosted at https://snuxplore.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b59cef4-1394-4e52-817c-afe7cb24582b/deploy-status)](https://app.netlify.com/sites/snuxplore/deploys)

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev # or yarn dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

It is suggested to use VS Code for this project. Remix does not support css pre-processors out of the box so we are using [Sass](https://sass-lang.com/) to compile our SCSS files into CSS.

The compiled CSS files will reside in the same directory as the SCSS files. To avoid confusion, I made a workspace setting for vscode that hides the compiled CSS files within VS Code. So while importing the stylesheets, you'll have to import the file with the extension .css.

If you are using some other IDE, please look for a way to hide the compiled CSS files so you won't have any confusion.

## Compiling SCSS

<details>
<summary>Read more</summary>

- The SCSS files are automatically watched and compiled when changes are made in any scss files within the project.

- When sending it to the server, the compiled CSS files are sent along with the SCSS files(Obsolete: In the final site, we'll set up a script that removes all scss files from the project since after compiling it, there's no need for scss files)

</details>
<br />

## Commit naming conventions

<details>
<summary>Read more</summary>

For now, we'll use just these:

- `fix:` - fixes a bug
- `feat:` - new feature
- `chore:` - other changes and cleanups

Example:

- `fix: fixed navigation bar`
- `feat: added new sign in feature`
- `chore: Removed all comments and print statements`

If theres a specific file thats changed or a specific sub category of the project has changes, you can specify it like so:

- `fix(NavBar): fixed overflowing image in nav bar`
- `feat(SignIn): Added user verification before sign In`

These are just good practices and it'll be easy to revert back if some new merge is breaking the project.

</details>
<br />

## Pull requests

<details>
<summary>Read more</summary>

Each contributing member should make a separate branch for completing their tasks.
You can follow these commands to do so:

- `git checkout -b <branch name>`
- `git add .`
- `git commit -m "<Meaningful message following the convention>"`
- `git push origin <branch name>`

Then in the github repo, you can create a new pull request under pull requests tab.

To keep your branch up-to-date with the master branch, you can use the following commands:

- `git merge main`
- `git push`

<em>Note: Make sure there are no changes in your branch before merging. If there are any, you'll lose the progress.</em>

</details>

<br/>

## New page

<details>
<summary>Read more</summary>

This one's quite tricky. I've setup `demo.js` and `demo.scss` in project.

When you want to make a new page, you can create a new file in the appropriate directory and copy the contents of `demo.js` and `demo.scss` into it.

Make sure to:

- Change path of stylesheet on the js file.
- Change the function name(Doesn't matter but just for consistency)
- Change the class name.
- Change path of \_mixin import in style sheet(remove the old one, type "`../`" and vs code will show the path automatically)

For a clean project structure, We'll be adding stylesheets to directories same as js files inside `styles/routes/` directory.

</details>

<br/>

## New Component

<details>
<summary>Read more</summary>
Components won't have much difference compared to React components.

Just create a folder followed by a `.js` file and a `.scss` file with the same name(The function should also be named same as the folder name).

One additional step is to import the `.scss` file in the `styles/root/components.scss` directory.

For example:
```css
@import "../../Components/MockNavigator/MockNavigator.scss";
```

<em>Note: Don't name two components with same name. Since all components are styles from same file, we don't want overlaps of style. That'll mess everything up.</em>

</details>
