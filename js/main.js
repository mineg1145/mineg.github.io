// 获取DOM元素
const content = document.getElementById('content');
const blogTitle = document.getElementById('blogTitle');
const settingsTitle = document.getElementById('settingsTitle');
const settingsButton = document.getElementById('settingsButton');
const backButton = document.getElementById('backButton');
const settingsScreen = document.getElementById('settingsScreen');
const postDetail = document.getElementById('postDetail');
const searchButton = document.getElementById('searchButton');
const darkModeSwitch = document.getElementById('darkModeSwitch');
const fontSizeSwitch = document.getElementById('fontSizeSwitch');
const simpleModeSwitch = document.getElementById('simpleModeSwitch');
const searchOverlay = document.getElementById('searchOverlay');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const closeSearch = document.getElementById('closeSearch');

let inSettings = false;

// 切换设置页面
function toggleSettings() {
  settingsButton.style.transform = 'scale(0.85)';
  setTimeout(() => {
    settingsButton.style.transform = 'scale(1)';
  }, 150);

  if (!inSettings) {
    settingsScreen.style.display = 'block';
    setTimeout(() => {
      settingsScreen.style.opacity = 1;
    }, 10);
    
    backButton.style.opacity = 1;
    backButton.setAttribute('data-action', 'close-settings');

    blogTitle.style.transition = 'opacity 0.4s, filter 0.4s';
    blogTitle.style.opacity = 0;
    blogTitle.style.filter = 'blur(4px)';

    settingsTitle.style.transition = 'opacity 0.4s 0.2s, filter 0.4s 0.2s';
    settingsTitle.style.opacity = 1;
    settingsTitle.style.filter = 'blur(0px)';
  } else {
    settingsScreen.style.opacity = 0;
    setTimeout(() => {
      settingsScreen.style.display = 'none';
    }, 300);
    
    backButton.style.opacity = 0;
    backButton.removeAttribute('data-action');

    settingsTitle.style.transition = 'opacity 0.4s, filter 0.4s';
    settingsTitle.style.opacity = 0;
    settingsTitle.style.filter = 'blur(4px)';

    blogTitle.style.transition = 'opacity 0.4s 0.2s, filter 0.4s 0.2s';
    blogTitle.style.opacity = 1;
    blogTitle.style.filter = 'blur(0px)';
  }

  inSettings = !inSettings;
}

// 打开搜索界面
function openSearch() {
  searchButton.style.transform = 'scale(0.85)';
  setTimeout(() => {
    searchButton.style.transform = 'scale(1)';
  }, 150);
  
  // 显示搜索界面
  searchOverlay.style.display = 'block';
  searchContainer.style.display = 'flex';
  
  // 添加模糊效果
  document.body.classList.add('search-active');
  
  // 淡入效果
  setTimeout(() => {
    searchOverlay.style.opacity = 1;
    searchContainer.style.opacity = 1;
    searchContainer.style.transform = 'translate(-50%, 0)';
    searchContainer.style.top = '80px';
  }, 10);
  
  // 聚焦输入框
  setTimeout(() => {
    searchInput.focus();
  }, 300);
}

// 关闭搜索界面
function closeSearchUI() {
  // 淡出效果
  searchOverlay.style.opacity = 0;
  searchContainer.style.opacity = 0;
  searchContainer.style.transform = 'translate(-50%, -20px)';
  
  // 移除模糊效果
  document.body.classList.remove('search-active');
  
  // 隐藏元素
  setTimeout(() => {
    searchOverlay.style.display = 'none';
    searchContainer.style.display = 'none';
    searchInput.value = '';
  }, 300);
}

// 返回按钮处理
function handleBackButton() {
  const action = backButton.getAttribute('data-action');
  
  if (action === 'close-post') {
    closeBlogPost();
  } else if (action === 'close-settings') {
    toggleSettings();
  }
}

// 初始化
function init() {
  loadSettings();
  loadBlog();
  
  // 事件监听
  settingsButton.addEventListener('click', toggleSettings);
  backButton.addEventListener('click', handleBackButton);
  
  searchButton.addEventListener('click', openSearch);
  closeSearch.addEventListener('click', closeSearchUI);
  searchOverlay.addEventListener('click', closeSearchUI);

  // 搜索输入框的回车事件
  searchInput.addEventListener('keyup', (e) => {
    console.log('按键按下:', e.key);
    if (e.key === 'Escape') {
      closeSearchUI();
    } else if (e.key === 'Enter') {
      console.log('回车键被按下，开始搜索');
      performSearch(searchInput.value);
    }
  });

  // 设置开关事件
  darkModeSwitch.addEventListener('click', () => {
    settings.darkMode = !settings.darkMode;
    applySettings();
    saveSettings();
  });

  fontSizeSwitch.addEventListener('click', () => {
    settings.largeFont = !settings.largeFont;
    applySettings();
    saveSettings();
  });

  simpleModeSwitch.addEventListener('click', () => {
    settings.simpleMode = !settings.simpleMode;
    applySettings();
    saveSettings();
  });
}

// 启动应用
init();