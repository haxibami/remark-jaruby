import test from "tape";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkJaruby from "./index.js";

const MdToHtml = (md) => {
  const result = unified()
    .use(remarkParse)
    .use(remarkJaruby)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(md);
  return result.toString();
};

test("markdown to html", (t) => {
  t.deepEqual(
    MdToHtml("{聖剣}^(エクスカリバー)"),
    "<p><ruby>聖剣<rp>(</rp><rt>エクスカリバー</rt><rp>)</rp></ruby></p>",
    "basic ruby conversion"
  );
  t.end();
});
