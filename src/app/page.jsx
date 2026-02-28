
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';

import { getBlogs } from '@/lib/getBlogs';

const page = async () => {
  const blogs = await getBlogs();
  const BlogList = () => {
   return (blogs ? blogs.map((m) => (
      <Cards key={m.id} title={m.title} description={m.description} url={m.social_image} />
    )) : <>loading...</>)
  }
  return (
    <div className='flex flex-col min-h-screen text-fg1 '>
      <Navbar />
      <Header />
      <main className='mb-2 flex flex-col flex-1 text-center bg-background2'>
        <span className='font-bold text-fg1'>Blogs</span>
        <div className='sm:grid grid-cols-4 gap-2 mx-5 mt-2'>
          <BlogList />

        </div>

      </main>
      <Footer />

    </div>
  );
};

export default page;
