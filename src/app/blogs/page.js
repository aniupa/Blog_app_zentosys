import { Bloglist } from '@/components/Bloglist';
export default async function Page() {
  return ( 
  <>  <h1 className="font-semibold text-2xl text-center mb-4 mt-4">Blogs</h1>
      
    <div className="grid-cols-1 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
     <Bloglist />
    </div></>

  );
}
