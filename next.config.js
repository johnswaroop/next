const {i18n} = require('./next-i18next.config')
module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            }
        ];
    },
    i18n,

};
