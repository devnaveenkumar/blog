import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs"
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug : string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post)=>({
        slug: post.slug,
    }))
};

export default async function PostPage(props: any){
    const params = await props.params;
    const slug = params.slug;
    const post = getPostContent(slug);
    return (
        <div>
            <h1 className="text-2xl">{post.data.title}</h1>
            <article className="prose lg:prose-xl">
            <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};
