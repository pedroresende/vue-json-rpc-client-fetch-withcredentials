# VUE-JS-JSON-RPC-CLIENT-WITHCREDENTIALS Vue.js integration

## Install

```bash
$ npm install vue-json-rpc-client-fetch-withcredentials
```

Open you `main.js` file and add the following

```javascript
import JsonRpcVueClient from 'vue-json-rpc-client-fetch-withcredentials'

Vue.use(JsonRpcVueClient, 'URL', 'CREDENTIALS', 'NEWHEADERS', 'DEBUG');
```

In your .vue file, to make a call just do it using

```javascript
this.$JsonRpcVueClient.request('method_name', {params})
.then((response) => {
    console.log(response);
})
```
