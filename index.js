'use strict';

import JsonRpcVueClient from 'json-rpc-client-fetch-withcredentials';

export default {
  install: function(Vue, url = url, credentials = 'include', config = false) {
    let client = new JsonRpcVueClient(url, credentials, config);

    Object.defineProperty(Vue.prototype, '$JsonRpcVueClient', { value: client });
  }
};
