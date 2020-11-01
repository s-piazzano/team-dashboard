require('dotenv').config()

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          databaseURL: process.env.databaseURL,
          projectId: process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId: process.env.messagingSenderId,
          appId: process.env.appId
        },
        features: {
          firestore: true
        }
      }
    }
  ],
}
