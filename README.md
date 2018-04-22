# Example app combining three recent [Next.js](https://github.com/zeit/next.js/) examples

Just for kicks, ensure IE 10, 11 for a combination of three official [Next.js](https://github.com/zeit/next.js/) examples, as follows:

* [with-hashed-statics](https://github.com/zeit/next.js/tree/canary/examples/with-hashed-statics)
* [with-styled-jsx-plugins](https://github.com/zeit/next.js/tree/master/examples/with-styled-jsx-plugins)
* [with-polyfills](https://github.com/zeit/next.js/tree/canary/examples/with-polyfills)

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Docker:

```bash
docker build -t somename:v1 .
docker run --rm -p 3000:3000 somename:v1
```
