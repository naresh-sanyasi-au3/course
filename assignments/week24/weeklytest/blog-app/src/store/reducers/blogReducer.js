import { fetchBlogs, submitBlog } from "../api/api";
import { store } from '../store';

function blogReducer(blogs = [], action) {
  if (action.type === 'GET_ALL_BLOGS') {
    fetchBlogs(store);
  }

  if (action.type === 'BLOGS_LOADED') {
    blogs = action.blogs
  }

  if (action.type === 'POST_BLOG') {
    submitBlog(store);
  }

  if (action.type === 'BLOG_POSTED') {
    blogs = action.blogs;
  }
  
  return blogs;
}

export default blogReducer;