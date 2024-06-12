export const envFile={
    amoCrmToken: process.env.AMOCRM_TOKEN || 'your_token',
    amoCrmDomain: process.env.AMOCRM_DOMAIN ||'your_domain',
    appPort: process.env.APP_PORT || '3000',
    appPrefix: process.env.APP_PREFIX || '/api'
}
export default () =>({
    envFile:envFile
})