const { getAge } = require('../Plugins/get-age.plugin')
const { getUUID } = require ('../Plugins/uuid.plugin');
const{ http } = require('./http-client.plugin')

module.exports = {
    getUUID,
    getAge,
    http,
}