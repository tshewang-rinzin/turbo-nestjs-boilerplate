module.exports = {
  lang: "en-US",
  title: "Turbo NestJS Boilerplate Documentation 🎉",
  description: "An ultimate and awesome nodejs boilerplate wrote in typescript",
  base:
    process.env.DEPLOY_ENV === "gh-pages" ? "/turbo-nestjs-boilerplate/" : "/",
  themeConfig: {
    sidebar: [
      ["/", "Introduction"],
      "/docs/development",
      "/docs/architecture",
      "/docs/naming-cheatsheet",
      // '/docs/routing',
      // '/docs/state',
      "/docs/linting",
      // '/docs/editors',
      // '/docs/production',
      // '/docs/troubleshooting',
    ],
  },
};
