import { Metadata } from "next";
import Image from "next/image";
import BlogData from "@/components/Blog/blogData";
import { Blog } from "@/types/blog";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";



interface IParams {
  id?: string;
}

const BlogPage = ({ params }: { params: IParams }) => {
  const blogId = params.id;

  const post: Blog | undefined = BlogData.find(
    (post) => post._id === Number(blogId)
  );

  if (!post) {
    return;
  }

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="sm:w-1/4">
              <RelatedPost />
            </div>

            <div className="animate_top rounded-xl border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10 sm:w-3/4">
              <div className="mb-10 w-full overflow-hidden ">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {post.title}
              </h2>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li className="flex gap-4">
                  <Image
                    src={post.author?.image}
                    alt={post.title}
                    width={25}
                    height={25}
                    className="rounded-full object-cover object-center"
                  />
                  {post.author?.name}
                </li>
                <li>
                  {post.publishedAt}
                </li>
                <li>
                  <span className="text-black dark:text-white">
                    Category: </span>Events
                </li>
              </ul>

              <div className="blog-details">
                <p>{post.metadata}</p>

                <p>
                  {post.body?.start}
                </p>

                <p>
                  {post.body?.main}
                </p>

                <p>
                  {post.body?.end}
                </p>
              </div>

              <SharePost tags={post.tags} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
