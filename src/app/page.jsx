// "use client"
import Header from '@/components/Header';
import { Bloglist } from '@/components/Bloglist';

const page = async () => {
  
 

  return (
    <div className='flex flex-col min-h-screen text-fg1 '>
      
      <Header welcome={true} />
      <main className='mb-2 flex flex-col flex-1 text-center bg-background2'>
        <span className='font-bold text-fg1'>Blogs</span>
        <div className='sm:grid grid-cols-4 gap-2 mx-5 mt-2'>
          <Bloglist />

        </div>

      </main>
      

    </div>
  );
};

export default page;
