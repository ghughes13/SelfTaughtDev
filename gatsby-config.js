module.exports = {
  siteMetadata: {
    title: `SelfTaughtDev`,
    description: `Build Projects and Learn To Code`,
    author: `@ghughes139`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175319701-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        defer: false,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `Garrett Hughes Portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/svgs/selftaughtdev-mini-logo-square.svg`,
      },
    },
  ],
}
