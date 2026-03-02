export const getBlogs = async () => {
  const res = await fetch('https://dev.to/api/articles');
  if (!res.ok) {
    throw new Error('failed to fetch blogs');
  }
  return res.json() || '';
};

export const getBlogByID = async (id) => {
  try {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
  
    
    const data= res.json();
    return data  
  } catch (error) {
    console.log('error' + error);
    throw new Error('not found');
  }
};
