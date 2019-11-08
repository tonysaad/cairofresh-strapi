'use strict';
const axios = require('axios');

/**
 * Lifecycle callbacks for the `Product` model.
 */

module.exports = {
  afterCreate: async (entry) => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
      .catch(() => {
          console.error('Something went wrong while calling Netlify Web Hook');
        }
      );
  },

  afterUpdate: async (entry) => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
      .catch(() => {
          console.error('Something went wrong while calling Netlify Web Hook');
        }
      );
  },

  afterDestroy: async (entry) => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
      .catch(() => {
          console.error('Something went wrong while calling Netlify Web Hook');
        }
      );
  }
};
