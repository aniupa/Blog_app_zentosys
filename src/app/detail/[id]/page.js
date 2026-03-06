import BlogDetailCard from '@/components/BlogDetailCard';
import { getBlogByID } from '@/lib/getBlogs';
export default async function Detail({ params }) {
  const { id } = await params;

  const blog = await getBlogByID(id);

  return (
    <>
    

      <main>
        <BlogDetailCard
        profile_image={blog.user.profile_image}
        author={blog.user.name}
        published_on={blog.readable_publish_date}
        Reading_time={blog.reading_time_minutes}
          img={blog.social_image}
          title={blog.title}
          content={blog.body_markdown}
          tags={blog.tag_list}
          like={blog.positive_reactions_count}
          comments={blog.comments_count}
          share={blog.public_reactions_count}
          id={blog.id}
        />
      </main>
    </>
  );
}
