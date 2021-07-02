module.exports = {
  siteTitle: 'Stoica Ovidiu', // Navigation and Site Title
  siteTitleAlt: 'The personal website of Ovidiu Stoica', // Alternative Site title for SEO
  siteTitleShort: 'ovidiustoica', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'https://ovistoica.com', // Domain of your site. No trailing slash!
  lang: 'en', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'I write about startups, growing businesses, programming and general self development',
  minibio: `
    Hi! My name is <strong>Ovidiu Stoica</strong>. I am a founder  with strong expertise in building web and 
    mobile applications. Currently I am building https://designvote.io. Get in contact to find more! 
  `,
  author: 'Ovidiu Stoica', // Author for schemaORGJSONLD
  organization: 'Ovidiu Stoica',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@TheOvidiuStoica', // Twitter Username
  ogSiteName: 'Ovidiu Stoica', // Facebook Site Name
  ogLanguage: 'en_US',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  twitter: 'https://twitter.com/TheOvidiuStoica',
  twitterHandle: '@TheOvidiuStoica',
  github: 'https://github.com/ovistoica/',
  linkedin: 'https://www.linkedin.com/in/ovidiu-stoica-6b74b9123/',
}
