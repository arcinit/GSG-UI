import React, { useEffect, useState } from "react";
import BlogPageDetails from "../components/BlogPageDetails";
import { useSearchParams } from "react-router-dom";
import http from "../service/http";

const BlogDetails = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await http.get(`/blogs/${slug}`);
        const data = res.data;

        setBlog(data.blog);
        setCategories(data.categories || []);
        setPopularPosts(data.popular_posts || []);
        setTags(data.tags || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading blog...</div>;
  }
  return (
    <div className="bg-[#E7F9FF]">
      <BlogDetailsHero blog={blog} />
      <BlogPageDetails
        blog={blog}
        categories={categories}
        popularPosts={popularPosts}
        tags={tags}
      />
    </div>
  );
};

export default BlogDetails;

function BlogDetailsHero({ blog }) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={blog.image}
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          {blog.title}
        </h1>
        <div className="flex items-center gap-3 text-[12px] text-[#FFFFFF]/85 mb-2">
          {/* USER */}
          <div className="flex items-center gap-2">
            <img
              src="/p1.jpg"
              className="w-[20px] h-[20px] rounded-[4px] object-cover"
              alt="John Carter"
            />
            <span className="font-medium text-[14px]">{blog.author_name}</span>
          </div>

          {/* DOT */}
          <span className="text-gray-400">•</span>

          {/* DATE */}
          <span className="font-medium text-[14px]">
            {new Date(blog.published_at).toDateString()}
          </span>
        </div>
      </div>
    </section>
  );
}
