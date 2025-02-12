import { getAllBlog } from "@/app/utils/actions/blogManagement";
import BlogUpdateFrom from "@/components/shared/BlogUpdateFrom";
import { TBlog } from "@/types/types";

const UpdateBlog = async ({ params }: { params: { blogId: string } }) => {
    
  // console.log(await params);

  const blogs = await getAllBlog();
  // console.log(blogs?.data);

  const matchBlog = blogs?.data?.find(
    (blog: TBlog) => blog._id === params.blogId
  );

//   console.log(matchBlog);
  return (
    <div>
      <BlogUpdateFrom blogData={matchBlog} />
    </div>
  );
};

export default UpdateBlog;
