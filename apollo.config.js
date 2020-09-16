module.exports = {
    client: {
      service: {
        name: 'user-page',
        // URL to the GraphQL API
        url: 'http://localhost:8000/api/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }