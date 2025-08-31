// 加载博客列表
function loadBlog() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  for(let i = 1; i <= 5; i++) {
    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';
    blogPost.style.animationDelay = `${(i-1)*0.1}s`;
    
    const gradient = colors[(i-1) % colors.length];
    const blogImage = document.createElement('div');
    blogImage.className = 'blog-image';
    blogImage.style.background = `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;
    
    const blogText = document.createElement('div');
    blogText.className = 'blog-text';
    blogText.innerHTML = `
      <h2 class="blog-title">博客标题 ${i}</h2>
      <p class="blog-desc">这里是博客内容摘要 ${i}，点击查看完整内容...</p>
    `;
    
    blogPost.appendChild(blogImage);
    blogPost.appendChild(blogText);
    content.appendChild(blogPost);

    // 添加点击事件
    blogPost.addEventListener('click', () => {
      openBlogPost(i);
    });
  }
}

// 打开博客详情
function openBlogPost(index) {
  // 添加hidden类来触发过渡效果
  document.querySelectorAll('.blog-post').forEach(p => {
    p.classList.add('hidden');
  });

  const gradient = colors[(index-1) % colors.length];
  document.getElementById('detailImage').style.background = `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;
  document.getElementById('detailTitle').innerText = `博客标题 ${index}`;
  document.getElementById('detailSubtitle').innerText = `这里是博客内容摘要 ${index}`;
  document.getElementById('detailBody').innerText = blogContents[index-1];

  document.getElementById('postDetail').style.display = 'block';
  setTimeout(() => {
    document.getElementById('postDetail').style.opacity = 1;
  }, 10);
  
  document.getElementById('backButton').style.opacity = 1;
  document.getElementById('backButton').setAttribute('data-action', 'close-post');
}

// 关闭博客详情
function closeBlogPost() {
  const postDetail = document.getElementById('postDetail');
  postDetail.style.opacity = 0;
  
  setTimeout(() => {
    postDetail.style.display = 'none';
    
    // 移除hidden类来触发淡入过渡效果
    document.querySelectorAll('.blog-post').forEach(p => {
      p.classList.remove('hidden');
    });
  }, 500);
  
  document.getElementById('backButton').style.opacity = 0;
  document.getElementById('backButton').removeAttribute('data-action');
}