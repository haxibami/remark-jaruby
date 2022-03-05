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

const markdown = `
{聖剣}^(エクスカリバー)
`;

console.log(MdToHtml(markdown));
