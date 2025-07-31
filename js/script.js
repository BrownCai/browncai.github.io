// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.6s ease';
    
    setTimeout(() => {
    document.body.style.opacity = 1;
    }, 100);
});

// 卡片滚动功能
function scrollCards(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 300; // 每次滚动的距离
    
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// 检测是否需要显示导航按钮
function checkNavVisibility() {
    const container = document.getElementById('javaCardsContainer');
    const navControls = document.getElementById('javaNav');
    
    if (container && navControls) {
        // 比较内容宽度和容器宽度
        const needsNavigation = container.scrollWidth > container.clientWidth;
        
        // 切换导航按钮显示状态
        navControls.style.display = needsNavigation ? 'flex' : 'none';
    }
}

// 在页面加载和窗口大小变化时检测
window.addEventListener('load', checkNavVisibility);
window.addEventListener('resize', checkNavVisibility);

// 防抖优化：避免频繁触发
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(checkNavVisibility, 250);
});

// // 自动滚动演示
// let autoScrollInterval;

// function startAutoScroll() {
//     autoScrollInterval = setInterval(() => {
//         scrollCards(1);
//     }, 3000);
// }

// function stopAutoScroll() {
//     clearInterval(autoScrollInterval);
// }

// // 监听鼠标悬停停止自动滚动
// const scrollContainers = document.querySelectorAll('.horizontal-scroll-container');
// scrollContainers.forEach(container => {
//     container.addEventListener('mouseenter', stopAutoScroll);
//     container.addEventListener('mouseleave', startAutoScroll);
// });

// // 页面加载完成后启动自动滚动
// window.addEventListener('load', () => {
//     startAutoScroll();
// });