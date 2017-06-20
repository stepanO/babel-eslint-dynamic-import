# Minimal Example of babel-eslint Issue

## SOLUTION

This was [resolved](https://github.com/babel/babel-eslint/issues/496). I did not
have the latest version of babel-eslint.

Run this to fix the issue:

```
npm install --save-dev babel-eslint@7
```

---

I cannot get ESLint to recognize ES2015 dynamic imports.

Every [github](https://github.com/benmosher/eslint-plugin-import/issues/743)
[issue](https://github.com/benmosher/eslint-plugin-import/issues/700) I've found
on this just says to install
[babel-eslint](https://github.com/babel/babel-eslint) as a parser for
[eslint](https://github.com/eslint/eslint), but that doesn't work for me.

## Steps to reproduce

```bash
npm install
./node_modules/.bin/eslint index.js
```

This results in this error for me:

```
/home/tyler/babel-eslint-dynamic-import/index.js
  2:5  error  Parsing error: Unexpected token

  ✖ 1 problem (1 error, 0 warnings)
```

It looks like it cannot parse `import()`. As `./node_modules/.bin/eslint c.js`
also results in the same error.

Note that I am able to run the files in node (v6.11.0) by running them with
`babel-node`:

```
$ ./node_modules/.bin/babel-node index.js
a
b
$ ./node_modules/.bin/babel-node c.js
Promise { <pending> }
{ a: 'a' }
```
