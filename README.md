#### Build status
[![Deploy static content to Pages](https://github.com/dyatlovk/uniano/actions/workflows/static_pages.yml/badge.svg)](https://github.com/dyatlovk/uniano/actions/workflows/static_pages.yml)

# Development setup
yarn
```bash
yarn install
yarn dev
```

npm
```bash
npm install
npm run dev
```

# Deploy static pages
Deploy is automatically running when you push something to dev branch.

If you want manual deploy, do:
```bash
yarn deploy
```

### FAQ

**Q**: I get error 'Cannot find module <module_name>' in my IDE

**A**: How to setup your workspace read https://stackoverflow.com/questions/60778047/yarn-cannot-find-module

For example if you use VSCode:

P.S. Before do this command you should comment this line "nodeLinker: node-modules" in .yarnrc.yml. Then run command bellow and uncomment line.
```bash
yarn dlx @yarnpkg/sdks vscode
```

**Q**: I use VSCode what are the recommended extensions?

**A**: See [recommended extensions](./.vscode/extensions.json) or open "Extensions" tab in VSCode and type in search field: @recommended