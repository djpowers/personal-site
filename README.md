# Personal site

The personal site of Dave Powers. Built using [Eleventy](https://www.11ty.dev/). 🎈🐀

[![Netlify Status](https://api.netlify.com/api/v1/badges/e06dd4d8-f48b-4d9b-849d-cd8996b73afd/deploy-status)](https://app.netlify.com/sites/davepowers/deploys)

## Development

`npm install`

`npx @11ty/eleventy --serve`

## Lighthouse

`npm run lh` will execute the following:

```
npx @11ty/eleventy  # build the site
npx lhci autorun    # run Lighthouse
npx lhci open --url # open report
```
