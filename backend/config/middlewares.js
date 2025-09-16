module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: '*',
      origin: ['https://5175-firebase-projetisa-1757764838151.cluster-lqzyk3r5hzdcaqv6zwm7wv6pwa.cloudworkstations.dev', 'http://localhost:5175']
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
