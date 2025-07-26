// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.6s ease';
    
    setTimeout(() => {
    document.body.style.opacity = 1;
    }, 100);
});

// 卡片滚动功能
        function scrollCards(direction) {
            const container = document.querySelector('.horizontal-scroll-container');
            const scrollAmount = 350; // 每次滚动的距离
            
            container.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }
        
        // 自动滚动演示（可选）
        let autoScrollInterval;
        
        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                scrollCards(1);
            }, 3000);
        }
        
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }
        
        // 监听鼠标悬停停止自动滚动
        const scrollContainers = document.querySelectorAll('.horizontal-scroll-container');
        scrollContainers.forEach(container => {
            container.addEventListener('mouseenter', stopAutoScroll);
            container.addEventListener('mouseleave', startAutoScroll);
        });
        
        // 页面加载完成后启动自动滚动
        window.addEventListener('load', () => {
            startAutoScroll();
        });