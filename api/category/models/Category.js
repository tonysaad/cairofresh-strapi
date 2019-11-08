'use strict';
const axios = require('axios');

/**
 * Lifecycle callbacks for the `Category` model.
 */

module.exports = {
  afterCreate: async (entry) => {
    axios.post(strapi.config.currentEnvironment.netlifyBuild)
      .catch((err) => {
          console.error('Something went wrong while calling Netlify Web Hook');
          console.error(err);
        }
      );
  },

  afterUpdate: async (entry) => {
    axios.post(strapi.config.currentEnvironment.netlifyBuild)
      .catch((err) => {
          console.error('Something went wrong while calling Netlify Web Hook');
          console.error(err);
        }
      );
  },

  afterDestroy: async (entry) => {
    axios.post(strapi.config.currentEnvironment.netlifyBuild)
      .catch((err) => {
          console.error('Something went wrong while calling Netlify Web Hook');
          console.error(err);
        }
      );
  }
};
