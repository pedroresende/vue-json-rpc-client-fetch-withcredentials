'use strict';

import JsonRpcVueClient from 'js-json-rpc-client-withcredentials';

export default {
  install: function(Vue, url = url, headers = {}, withcredentials = true, config = false) {
    let client = JsonRpcVueClient(url, headers, withcredentials, config);

    Object.defineProperty(Vue.prototype, '$JJsonRpcVueClient', { value: client });
  }
};
