// 颜色方案
const colors = [
  ['#FF6B6B', '#FFD93D'],
  ['#4ECDC4', '#556270'],
  ['#C7F464', '#FF6B6B'],
  ['#FF6B6B', '#4ECDC4'],
  ['#556270', '#C7F464']
];

// 博客内容数据
const blogContents = [
  "这是一篇示例博客文章的内容...",
  "技术博客通常关注最新的开发...",
  "旅行博客带读者踏上世界各地的旅程...",
  "美食博客结合了对烹饪的热爱...",
  "个人发展博客专注于自我提升..."
];

// 初始化设置状态
let settings = {
  darkMode: false,
  largeFont: false,
  simpleMode: false
};

// 从本地存储加载设置
function loadSettings() {
  const savedSettings = localStorage.getItem('blogSettings');
  if (savedSettings) {
    settings = JSON.parse(savedSettings);
    applySettings();
  }
}

// 保存设置到本地存储
function saveSettings() {
  localStorage.setItem('blogSettings', JSON.stringify(settings));
}

// 应用当前设置
function applySettings() {
  // 深色模式
  if (settings.darkMode) {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeSwitch').classList.add('active');
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById('darkModeSwitch').classList.remove('active');
  }
  
  // 字体大小
  if (settings.largeFont) {
    document.body.classList.add('large-font');
    document.getElementById('fontSizeSwitch').classList.add('active');
  } else {
    document.body.classList.remove('large-font');
    document.getElementById('fontSizeSwitch').classList.remove('active');
  }
  
  // 简约模式
  if (settings.simpleMode) {
    document.body.classList.add('simple-mode');
    document.getElementById('simpleModeSwitch').classList.add('active');
  } else {
    document.body.classList.remove('simple-mode');
    document.getElementById('simpleModeSwitch').classList.remove('active');
  }
}