'use strict';

import JsonRpcVueClient from 'json-rpc-client-fetch-withcredentials';

export default {
  install: function(Vue, url = url, credentials = 'same-origin', config = false) {
    let client = new JsonRpcVueClient(url, credentials, config);

    Object.defineProperty(Vue.prototype, '$JJsonRpcVueClient', { value: client });
  }
};
