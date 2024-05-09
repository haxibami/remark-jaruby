/// <reference types="remark-parse" />
/// <reference types="remark-stringify" />
/// <reference types="mdast-util-jaruby" />

/**
 * @typedef {import("mdast").Root} Root
 * @typedef {import("unified").Processor<Root>} Processor
 */

import { jaruby } from "micromark-extension-jaruby";
import { jarubyFromMarkdown, jarubyToMarkdown } from "mdast-util-jaruby";

/**
 * @this {Processor}
 * @type {import("unified").Plugin<void[], Root>}
 */
export default function remarkJaruby() {
  const data = this.data();

  const micromarkExtensions =
    data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions =
    data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions =
    data.toMarkdownExtensions || (data.toMarkdownExtensions = []);

  micromarkExtensions.push(jaruby());
  fromMarkdownExtensions.push(jarubyFromMarkdown());
  toMarkdownExtensions.push(jarubyToMarkdown());
}
