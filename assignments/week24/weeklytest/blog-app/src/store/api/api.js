function fetchBlogs(store) {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log('blogs: ', json);
      store.dispatch({
        type: 'BLOGS_LOADED',
        blogs: json
      })
    })
}

function submitBlog(store) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log(json);
    store.dispatch({
      type: 'BLOG_POSTED',
      blogs: json
    })
  })
}

export {
  fetchBlogs,
  submitBlog
}