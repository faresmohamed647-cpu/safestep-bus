// ===================================
// LIVE TRACKING PAGE
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Sample bus data
    const buses = [
        {
            id: 'BUS001',
            name: 'Bus 1 - Route A',
            route: 'Downtown → North Campus',
            driver: 'John Smith',
            students: 28,
            status: 'active',
            speed: 45,
            position: { lat: 30, lng: 25 },
            eta: '8 min'
        },
        {
            id: 'BUS002',
            name: 'Bus 2 - Route B',
            route: 'Westside → Main Campus',
            driver: 'Sarah Johnson',
            students: 32,
            status: 'active',
            speed: 38,
            position: { lat: 45, lng: 55 },
            eta: '12 min'
        },
        {
            id: 'BUS003',
            name: 'Bus 3 - Route C',
            route: 'Eastside → South Campus',
            driver: 'Michael Brown',
            students: 25,
            status: 'active',
            speed: 42,
            position: { lat: 65, lng: 35 },
            eta: '5 min'
        },
        {
            id: 'BUS004',
            name: 'Bus 4 - Route D',
            route: 'Suburbs → Central Campus',
            driver: 'Emily Davis',
            students: 30,
            status: 'idle',
            speed: 0,
            position: { lat: 20, lng: 75 },
            eta: 'Stopped'
        },
        {
            id: 'BUS005',
            name: 'Bus 5 - Route E',
            route: 'Industrial → North Campus',
            driver: 'David Wilson',
            students: 22,
            status: 'active',
            speed: 50,
            position: { lat: 80, lng: 60 },
            eta: '15 min'
        }
    ];
    
    let selectedBusId = null;
    
    // Initialize tracking
    function initTracking() {
        renderBusList();
        renderBusMarkers();
        updateStats();
        
        // Update positions every 2 seconds
        setInterval(function() {
            updateBusPositions();
            renderBusMarkers();
            updateStats();
        }, 2000);
    }
    
    // Render bus list
    function renderBusList() {
        const busList = document.getElementById('busList');
        if (!busList) return;
        
        busList.innerHTML = buses.map(bus => `
            <div class="bus-card ${selectedBusId === bus.id ? 'selected' : ''}" 
                 onclick="selectBus('${bus.id}')">
                <div class="bus-header">
                    <div class="bus-info">
                        <span class="status-dot ${bus.status}"></span>
                        <div>
                            <div class="bus-name">${bus.name}</div>
                            <div class="bus-id">${bus.id}</div>
                        </div>
                    </div>
                    <div class="bus-eta">${bus.eta}</div>
                </div>
                <div class="bus-details">
                    <div class="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${bus.route}</span>
                    </div>
                    <div class="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                        </svg>
                        <span>${bus.students} students</span>
                    </div>
                    ${bus.status === 'active' ? `
                        <div class="detail-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                            </svg>
                            <span>${bus.speed} km/h</span>
                        </div>
                    ` : ''}
                </div>
                <div class="bus-driver">Driver: ${bus.driver}</div>
            </div>
        `).join('');
    }
    
    // Render bus markers on map
    function renderBusMarkers() {
        const mapContainer = document.getElementById('busMap');
        if (!mapContainer) return;
        
        // Clear existing markers
        const existingMarkers = mapContainer.querySelectorAll('.map-bus-marker');
        existingMarkers.forEach(marker => marker.remove());
        
        // Add new markers
        buses.forEach(bus => {
            const marker = document.createElement('div');
            marker.className = `map-bus-marker ${bus.status} ${selectedBusId === bus.id ? 'selected' : ''}`;
            marker.style.left = bus.position.lng + '%';
            marker.style.top = bus.position.lat + '%';
            marker.setAttribute('data-bus-id', bus.id);
            marker.onclick = () => selectBus(bus.id);
            
            marker.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="11" width="18" height="10" rx="2"/>
                    <path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>
                    <circle cx="8" cy="18" r="1"/>
                    <circle cx="16" cy="18" r="1"/>
                </svg>
                <div class="marker-tooltip">
                    <div class="tooltip-title">${bus.name}</div>
                    <div class="tooltip-speed">${bus.speed} km/h</div>
                </div>
            `;
            
            mapContainer.appendChild(marker);
        });
    }
    
    // Update bus positions (simulated movement)
    function updateBusPositions() {
        buses.forEach(bus => {
            if (bus.status === 'active') {
                bus.position.lat = Math.min(95, Math.max(5, bus.position.lat + (Math.random() - 0.5) * 3));
                bus.position.lng = Math.min(95, Math.max(5, bus.position.lng + (Math.random() - 0.5) * 3));
                bus.speed = Math.max(30, Math.min(60, bus.speed + (Math.random() - 0.5) * 10));
            }
        });
    }
    
    // Select bus
    window.selectBus = function(busId) {
        selectedBusId = busId;
        renderBusList();
        renderBusMarkers();
        
        // Scroll to selected bus in list
        const selectedCard = document.querySelector(`.bus-card[onclick="selectBus('${busId}')"]`);
        if (selectedCard) {
            selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };
    
    // Update stats
    function updateStats() {
        const activeBuses = buses.filter(b => b.status === 'active').length;
        const totalStudents = buses.reduce((sum, b) => sum + b.students, 0);
        const avgSpeed = Math.round(
            buses.filter(b => b.status === 'active')
                .reduce((sum, b) => sum + b.speed, 0) / activeBuses
        );
        
        const statsData = {
            'activeBuses': activeBuses,
            'totalStudents': totalStudents,
            'avgSpeed': avgSpeed + ' km/h',
            'onTime': '98%'
        };
        
        Object.keys(statsData).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = statsData[key];
            }
        });
    }
    
    // Initialize
    initTracking();
});
