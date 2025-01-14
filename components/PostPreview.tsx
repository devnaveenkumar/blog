import Link from "next/link";
import getPostMetadata from "./getPostMetadata";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return <div className="border border-slate-200 p-6 rounded-md shadow-md bg-white">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold hover:underline">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="text-slate-600">{props.subtitle}</p>
    </div>
}

export default PostPreview