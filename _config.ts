import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

import transformImages from "lume/plugins/transform_images.ts";
import extractDate from "lume/plugins/extract_date.ts";

import "npm:prismjs@1.30.0/components/prism-bash.js";
import "npm:prismjs@1.30.0/components/prism-typescript.js";

const site = lume({
    location: new URL("https://blog.pomdtr.me/")
});

site.add("posts/img")

site.use(extractDate())
site.use(blog());
site.use(transformImages())


export default site;
