# remark-jaruby

[![Node.js CI](https://github.com/haxibami/remark-jaruby/actions/workflows/node.js.yml/badge.svg)](https://github.com/haxibami/remark-jaruby/actions/workflows/node.js.yml)
[![Node.js Package](https://github.com/haxibami/remark-jaruby/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/haxibami/remark-jaruby/actions/workflows/npm-publish.yml)
[![codecov](https://codecov.io/gh/haxibami/remark-jaruby/branch/main/graph/badge.svg?token=TJBYUOHA0P)](https://codecov.io/gh/haxibami/remark-jaruby)
[![GitHub license](https://img.shields.io/github/license/haxibami/remark-jaruby)](https://github.com/haxibami/remark-jaruby/blob/main/LICENSE)

[remark](https://github.com/remarkjs/remark) plugin to support custom ruby syntax in markdown.

## Feature

- compatible with latest unified ecosystem
- fully typed
- ESM only

## Syntax

As per specification in [remark-ruby](https://github.com/laysent/remark-ruby)

Define ruby:

```md
{聖剣}^(エクスカリバー)
```

Compiled to:

```html
<p>
  <ruby>聖剣<rp>(</rp><rt>エクスカリバー</rt><rp>)</rp></ruby>
</p>
```

See [note](#note): support for text delimitation ( equals to `<rb>` tag) is omitted.

## Usage

```js
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkJaruby from "remark-jaruby";

const MdToHtml = (md) => {
  const result = unified()
    .use(remarkParse)
    .use(remarkJaruby)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(md);
  return result.toString();
};

const markdown = `
{聖剣}^(エクスカリバー)
`;

console.log(MdToHtml(markdown));
```

generates...

```html
<p>
  <ruby>聖剣<rp>(</rp><rt>エクスカリバー</rt><rp>)</rp></ruby>
</p>
```

## Dependency

Uses [micromark-extension-jaruby](https://github.com/haxibami/micromark-extension-jaruby) and [mdast-util-jaruby](https://github.com/haxibami/mdast-util-jaruby) internally.

## Note

- This package is almost a refactoring of [remark-ruby](https://github.com/laysent/remark-ruby). Original package is licensed under [MIT License](https://github.com/laysent/remark-ruby/blob/a5d2ec31cf4750e003890204ea43a71607d5e4d8/LICENSE).
- Support for text delimitation & `<rb>` tag in original package was omitted, since only few browsers can display it.
