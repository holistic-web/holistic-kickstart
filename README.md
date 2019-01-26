# Holistic Kickstart

## Kickstart
_We recommend copying this section into an issue and checking tasks off when complete._
- [ ] update browser page title in `/public/index.html` from `'Holistic - Kickstart'`
- [ ] update sidebar title in `/src/components/sidebar.vue` from `'Holistic - Kickstart'`
- [ ] update default API_URL in `/src/vuex/lib/buildCollectionStore.js` from `'https://replace.me/api'` to your cloud functions endpoint

## UI

### Environment Variables
- `BASE_URL` - the url the UI is currently hosted at
- `API_URL` - the url the API is available at

### Command Line Commands

#### Install dependencies
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Run your tests
```
npm run test
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
