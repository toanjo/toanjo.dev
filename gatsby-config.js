module.exports = {
  siteMetadata: {
    title: "Tó Anjo",
    author: "Tó Anjo",
    description: "Tó Anjo's blog and personal website.",
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/images/,
        },
      },
    },
  ]
}
