"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexUtilities = void 0;
const request = require("request");
let CONFIG = require("../configuration/configuration.json");
/**
 * Class containing utility method for querying Yandex API
 * @author: Ninad Chaubal
 */
class YandexUtilities {
    /**
     * Method for querying Yandex lookup API
     * @param text {string}: Input text to lookup in dictionary
     * @returns {Promise<any>}
     */
    static getDictionaryLookup(text) {
        return new Promise((resolve, reject) => {
            let requestHeader = CONFIG.yandex.headers;
            let options = {
                method: CONFIG.yandex.method,
                url: CONFIG.yandex.url + "?key=" + CONFIG.yandex.apiKey + "&lang=" + CONFIG.yandex.lang + "&text=" + text,
                headers: requestHeader,
                json: true
            };
            request(options, (error, response, body) => {
                if (error)
                    return reject(error);
                if (response) {
                    return resolve(body);
                }
            });
        });
    }
}
exports.YandexUtilities = YandexUtilities;
//# sourceMappingURL=YandexUtilties.js.map