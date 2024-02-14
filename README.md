### ⚙️Install prerequisites (once for a machine)

- **Node Installation:** [Install node js](https://nodejs.org/en/download/) [Recommended LTS version]

### 🖥️Local setup

After successfully installing those dependencies, open this template with any IDE [[VS Code](https://code.visualstudio.com/) recommended], and then open the internal terminal of IDM [vs code shortcut <code>ctrl/cmd+\`</code>]

- Install dependencies

```
npm install
```

- Run locally

```
npm run dev
```

After that, it will open up a preview of the template in your default browser, watch for changes to source files, and live-reload the browser when changes are saved.

## 🔨Production Build

After finishing all the customization, you can create a production build by running this command.

```
npm run build
```

```
pharmablog-astro
├─ .editorconfig
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ sectionscleanup
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           ├─ main
│  │           └─ sectionscleanup
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ sectionscleanup
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     ├─ main
│     │     └─ sectionscleanup
│     └─ tags
├─ .gitignore
├─ .markdownlint.json
├─ .prettierrc
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ astro.config.mjs
├─ LICENSE
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ .htaccess
│  ├─ images
│  │  ├─ favicon.png
│  │  ├─ image-placeholder.png
│  │  ├─ logo.png
│  │  └─ posts
│  │     ├─ 01.jpg
│  │     ├─ 02.jpg
│  │     ├─ 03.jpg
│  │     ├─ 04.jpg
│  │     ├─ 05.jpg
│  │     ├─ 06.jpg
│  │     ├─ 07.jpg
│  │     └─ greece.webp
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ config
│  │  ├─ config.json
│  │  ├─ menu.json
│  │  ├─ social.json
│  │  └─ theme.json
│  ├─ content
│  │  ├─ about
│  │  │  └─ index.md
│  │  ├─ config.ts
│  │  ├─ pages
│  │  │  ├─ 404.md
│  │  │  ├─ contact.md
│  │  │  ├─ elements.mdx
│  │  │  └─ privacy-policy.md
│  │  └─ posts
│  │     ├─ -index.md
│  │     ├─ medicamente-interzise-in-grecia.md
│  │     ├─ post-2.md
│  │     ├─ post-3.md
│  │     ├─ post-4.md
│  │     ├─ post-5.md
│  │     ├─ post-6.md
│  │     └─ post-7.md
│  ├─ env.d.ts
│  ├─ layouts
│  │  ├─ components
│  │  ├─ partials
│  │  ├─ SearchBar.tsx
│  │  └─ shortcodes
│  │     ├─ Accordion.tsx
│  │     ├─ Button.tsx
│  │     ├─ Notice.tsx
│  │     ├─ Tab.tsx
│  │     ├─ Tabs.tsx
│  │     ├─ Video.tsx
│  │     └─ Youtube.tsx
│  ├─ lib
│  │  └─ utils
│  │     ├─ dateFormat.ts
│  │     ├─ readingTime.ts
│  │     ├─ similarItems.ts
│  │     ├─ sortFunctions.ts
│  │     ├─ taxonomyFilter.ts
│  │     └─ textConverter.ts
│  ├─ pages
│  │  ├─ categories
│  │  ├─ page
│  │  └─ tags
│  ├─ styles
│  │  ├─ base.scss
│  │  ├─ buttons.scss
│  │  ├─ components.scss
│  │  ├─ main.scss
│  │  ├─ navigation.scss
│  │  └─ utilities.scss
│  └─ types
│     └─ index.d.ts
├─ tailwind.config.js
└─ tsconfig.json

```