// 模拟数据更新函数
function updateDashboard() {
    // 模拟随机数据（实际项目中这里会调用后端API）
    const mockData = {
        productionStatus: ['运行中', '待机', '维护中'][Math.floor(Math.random() * 3)],
        equipmentStatus: ['正常', '警告', '故障'][Math.floor(Math.random() * 3)],
        productionCount: Math.floor(Math.random() * 500) + 1000, // 1000-1499随机
        errorRate: (Math.random() * 2).toFixed(2) + '%' // 0.00%-1.99%随机
    };

    document.getElementById('production-status').textContent = mockData.productionStatus;
    document.getElementById('equipment-status').textContent = mockData.equipmentStatus;
    document.getElementById('production-count').textContent = mockData.productionCount;
    document.getElementById('error-rate').textContent = mockData.errorRate;
}

// 初始加载数据
updateDashboard();

// 绑定刷新按钮事件
document.getElementById('refresh-btn').addEventListener('click', updateDashboard);