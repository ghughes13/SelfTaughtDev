module.exports = {
  siteMetadata: {
    title: `SelfTaughtDev`,
    description: `Build Projects and Learn To Code`,
    author: `@ghughes139`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-175319701-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://selftaught-dev.com/",
        sitemap: "https://selftaught-dev.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Self Taught Dev`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#3bb99b`,
        display: `minimal-ui`,
        icon: `src/svgs/selftaughtdev-mini-logo-square.svg`,
      },
    },
  ],
}
