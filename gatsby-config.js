require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`article`, `test`],
        singleTypes: [`left-menu-item`],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          //`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
