// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.6s ease';
    
    setTimeout(() => {
    document.body.style.opacity = 1;
    }, 100);
});
