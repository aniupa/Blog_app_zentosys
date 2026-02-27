export  const getBlogs = async () => {
  const res = await fetch('https://dev.to/api/articles');
  if (!res.ok) {
    throw new Error('failed to fetch blogs');
  }
  return res.json();
};
