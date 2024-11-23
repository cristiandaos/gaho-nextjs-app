const path = require('path');

module.exports = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};
