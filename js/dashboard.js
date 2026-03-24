// ===================================
// DASHBOARD PAGE
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Dashboard data
    const dashboardData = {
        stats: {
            totalBuses: 12,
            activeBuses: 10,
            totalStudents: 450,
            onTimeRate: 98
        },
        recentActivity: [
            { type: 'success', title: 'Bus 7 completed route', description: 'Route B completed successfully', time: '2 min ago' },
            { type: 'info', title: 'New student added', description: 'Emma Wilson assigned to Bus 3', time: '15 min ago' },
            { type: 'warning', title: 'Minor delay on Route C', description: 'Traffic congestion - ETA +5 minutes', time: '23 min ago' },
            { type: 'success', title: 'Maintenance completed', description: 'Bus 5 ready for operation', time: '1 hour ago' },
            { type: 'info', title: 'Driver check-in', description: 'John Smith started shift', time: '2 hours ago' }
        ],
        routes: [
            { route: 'Route A', bus: 'Bus 1', students: 28, status: 'On Time', progress: 75 },
            { route: 'Route B', bus: 'Bus 2', students: 32, status: 'On Time', progress: 60 },
            { route: 'Route C', bus: 'Bus 3', students: 25, status: 'Delayed', progress: 45 },
            { route: 'Route D', bus: 'Bus 4', students: 30, status: 'On Time', progress: 90 }
        ],
        alerts: [
            { type: 'warning', title: 'Maintenance Due', description: 'Bus 8 requires service in 3 days', time: 'Today' },
            { type: 'info', title: 'New Route Request', description: 'Parent requested pickup point change', time: 'Today' },
            { type: 'success', title: 'Report Generated', description: 'Monthly performance report is ready', time: 'Yesterday' }
        ]
    };
    
    // Render dashboard stats
    function renderStats() {
        if (document.getElementById('totalBuses')) {
            document.getElementById('totalBuses').textContent = dashboardData.stats.totalBuses;
            document.getElementById('activeBuses').textContent = dashboardData.stats.activeBuses;
            document.getElementById('totalStudents').textContent = dashboardData.stats.totalStudents;
            document.getElementById('onTimeRate').textContent = dashboardData.stats.onTimeRate + '%';
        }
    }
    
    // Render recent activity
    function renderActivity() {
        const activityContainer = document.getElementById('recentActivity');
        if (!activityContainer) return;
        
        activityContainer.innerHTML = dashboardData.recentActivity.map(activity => `
            <div class="activity-item glass-card">
                <div class="activity-icon ${activity.type}">
                    ${getActivityIcon(activity.type)}
                </div>
                <div class="activity-content">
                    <div class="activity-title">${activity.title}</div>
                    <div class="activity-description">${activity.description}</div>
                </div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `).join('');
    }
    
    // Get activity icon
    function getActivityIcon(type) {
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
        };
        return icons[type] || icons.info;
    }
    
    // Render routes
    function renderRoutes() {
        const routesContainer = document.getElementById('activeRoutes');
        if (!routesContainer) return;
        
        routesContainer.innerHTML = dashboardData.routes.map(route => `
            <div class="route-card glass-card">
                <div class="route-header">
                    <div>
                        <div class="route-name">${route.route}</div>
                        <div class="route-info">${route.bus} • ${route.students} students</div>
                    </div>
                    <span class="status-badge ${route.status.toLowerCase().replace(' ', '-')}">${route.status}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${route.progress}%"></div>
                </div>
                <div class="progress-text">${route.progress}% Complete</div>
            </div>
        `).join('');
    }
    
    // Render alerts
    function renderAlerts() {
        const alertsContainer = document.getElementById('alertsContainer');
        if (!alertsContainer) return;
        
        alertsContainer.innerHTML = dashboardData.alerts.map(alert => `
            <div class="alert-item glass-card">
                <div class="alert-icon ${alert.type}">
                    ${getActivityIcon(alert.type)}
                </div>
                <div class="alert-content">
                    <div class="alert-title">${alert.title}</div>
                    <div class="alert-description">${alert.description}</div>
                    <div class="alert-time">${alert.time}</div>
                </div>
            </div>
        `).join('');
    }
    
    // Update real-time data
    function updateRealTimeData() {
        // Simulate real-time updates
        setInterval(() => {
            // Update active buses count
            dashboardData.stats.activeBuses = 10 + Math.floor(Math.random() * 3);
            renderStats();
            
            // Update route progress
            dashboardData.routes.forEach(route => {
                if (route.status === 'On Time' && route.progress < 100) {
                    route.progress = Math.min(100, route.progress + Math.random() * 5);
                }
            });
            renderRoutes();
        }, 5000);
    }
    
    // Initialize dashboard
    function initDashboard() {
        renderStats();
        renderActivity();
        renderRoutes();
        renderAlerts();
        updateRealTimeData();
    }
    
    // Start dashboard
    if (document.body.classList.contains('dashboard-page')) {
        initDashboard();
    }
});

// Chart initialization (if chart library is available)
function initCharts() {
    // This would integrate with a charting library like Chart.js
    // For now, we'll create simple visual representations
    
    const chartContainers = document.querySelectorAll('[data-chart]');
    
    chartContainers.forEach(container => {
        const chartType = container.getAttribute('data-chart');
        
        if (chartType === 'line') {
            createLineChart(container);
        } else if (chartType === 'bar') {
            createBarChart(container);
        } else if (chartType === 'pie') {
            createPieChart(container);
        }
    });
}

// Simple line chart
function createLineChart(container) {
    const data = [30, 45, 38, 52, 48, 60, 55, 65, 58, 70, 68, 75];
    const max = Math.max(...data);
    const height = container.offsetHeight || 200;
    
    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - (value / max * 80);
        return `${x},${y}`;
    }).join(' ');
    
    container.innerHTML = `
        <svg width="100%" height="${height}" style="overflow: visible;">
            <polyline 
                points="${points}" 
                fill="none" 
                stroke="url(#lineGradient)" 
                stroke-width="3"
                style="vector-effect: non-scaling-stroke;"
            />
            <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#9333ea;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
    `;
}

// Simple bar chart
function createBarChart(container) {
    const data = [65, 45, 80, 55, 90, 70];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const max = Math.max(...data);
    
    container.innerHTML = `
        <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 100%; padding: 1rem;">
            ${data.map((value, index) => `
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                    <div style="
                        width: 80%;
                        height: ${(value / max * 100)}%;
                        background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
                        border-radius: 0.5rem 0.5rem 0 0;
                        transition: all 0.3s ease;
                    "></div>
                    <div style="font-size: 0.75rem; color: #a0a0b0;">${labels[index]}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Simple pie chart
function createPieChart(container) {
    const data = [40, 30, 20, 10];
    const colors = ['#3b82f6', '#9333ea', '#22c55e', '#f59e0b'];
    const total = data.reduce((a, b) => a + b, 0);
    
    let currentAngle = 0;
    const segments = data.map((value, index) => {
        const angle = (value / total) * 360;
        const startAngle = currentAngle;
        currentAngle += angle;
        
        return {
            value,
            color: colors[index],
            startAngle,
            angle
        };
    });
    
    container.innerHTML = `
        <svg width="200" height="200" viewBox="0 0 200 200" style="display: block; margin: 0 auto;">
            ${segments.map(segment => {
                const startAngle = segment.startAngle - 90;
                const endAngle = startAngle + segment.angle;
                const largeArc = segment.angle > 180 ? 1 : 0;
                
                const x1 = 100 + 80 * Math.cos(startAngle * Math.PI / 180);
                const y1 = 100 + 80 * Math.sin(startAngle * Math.PI / 180);
                const x2 = 100 + 80 * Math.cos(endAngle * Math.PI / 180);
                const y2 = 100 + 80 * Math.sin(endAngle * Math.PI / 180);
                
                return `
                    <path 
                        d="M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z"
                        fill="${segment.color}"
                        opacity="0.8"
                    />
                `;
            }).join('')}
            <circle cx="100" cy="100" r="50" fill="#0a0a0f"/>
        </svg>
    `;
}

document.addEventListener('DOMContentLoaded', initCharts);
