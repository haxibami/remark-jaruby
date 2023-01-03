/**
 * @typedef {import("mdast").Root} Root
 * @typedef {import("unified").Processor} Processor
 */

import { jaruby } from "micromark-extension-jaruby";
import { jarubyFromMarkdown, jarubyToMarkdown } from "mdast-util-jaruby";

/**
 * @this {Processor}
 * @type {import("unified").Plugin<void[], Root>}
 */
export default function remarkJaruby() {
  const data = this.data();
  add("micromarkExtensions", jaruby());
  add("fromMarkdownExtensions", jarubyFromMarkdown());
  add("toMarkdownExtensions", jarubyToMarkdown());

  /**
   * @param {string} field
   * @param {unknown} value
   */
  function add(field, value) {
    const list = /** @type {unknown[]} */ (
      // Other extensions
      /* c8 ignore next 2 */
      data[field] ? data[field] : (data[field] = [])
    );

    list.push(value);
  }
}
