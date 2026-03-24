import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bus, MapPin, Clock, Users, Navigation, Zap } from 'lucide-react';

interface BusData {
  id: string;
  name: string;
  route: string;
  driver: string;
  students: number;
  status: 'active' | 'idle' | 'maintenance';
  speed: number;
  position: { lat: number; lng: number };
  eta: string;
}

export default function LiveTracking() {
  const [selectedBus, setSelectedBus] = useState<string | null>(null);
  const [buses, setBuses] = useState<BusData[]>([
    {
      id: 'BUS001',
      name: 'Bus 1 - Route A',
      route: 'Downtown → North Campus',
      driver: 'John Smith',
      students: 28,
      status: 'active',
      speed: 45,
      position: { lat: 30, lng: 25 },
      eta: '8 min',
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
      eta: '12 min',
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
      eta: '5 min',
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
      eta: 'Stopped',
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
      eta: '15 min',
    },
  ]);

  // Simulate bus movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBuses((prevBuses) =>
        prevBuses.map((bus) => {
          if (bus.status === 'active') {
            return {
              ...bus,
              position: {
                lat: Math.min(95, bus.position.lat + (Math.random() - 0.5) * 3),
                lng: Math.min(95, bus.position.lng + (Math.random() - 0.5) * 3),
              },
              speed: Math.max(30, Math.min(60, bus.speed + (Math.random() - 0.5) * 10)),
            };
          }
          return bus;
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'idle':
        return 'bg-yellow-500';
      case 'maintenance':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  Live <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Bus Tracking</span>
                </h1>
                <p className="text-gray-400">Real-time monitoring of all school buses</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-300">Live</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Active Buses', value: buses.filter((b) => b.status === 'active').length, icon: Bus, color: 'green' },
                { label: 'Total Students', value: buses.reduce((sum, b) => sum + b.students, 0), icon: Users, color: 'blue' },
                { label: 'Avg Speed', value: `${Math.round(buses.filter((b) => b.status === 'active').reduce((sum, b) => sum + b.speed, 0) / buses.filter((b) => b.status === 'active').length)} km/h`, icon: Zap, color: 'purple' },
                { label: 'On Time', value: '98%', icon: Clock, color: 'yellow' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 bg-${stat.color}-600/20 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Tracking Interface */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-6 h-[600px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Live Map</h2>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600/20 rounded-lg text-sm hover:bg-blue-600/30 transition-colors">
                      Satellite
                    </button>
                    <button className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition-colors">
                      Traffic
                    </button>
                  </div>
                </div>

                {/* Simulated Map */}
                <div className="h-[520px] bg-gradient-to-br from-blue-950/30 to-purple-950/30 rounded-xl relative overflow-hidden">
                  {/* Grid Background */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 30px, rgba(255,255,255,0.1) 31px),
                                       repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 30px, rgba(255,255,255,0.1) 31px)`,
                    }}
                  />

                  {/* Roads/Routes */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <path d="M 0,100 Q 200,150 400,100 T 800,100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                    <path d="M 100,0 Q 150,200 100,400 T 100,800" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                    <path d="M 0,300 L 800,300" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                  </svg>

                  {/* Bus Markers */}
                  {buses.map((bus) => (
                    <motion.div
                      key={bus.id}
                      animate={{
                        left: `${bus.position.lng}%`,
                        top: `${bus.position.lat}%`,
                      }}
                      transition={{ duration: 2 }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setSelectedBus(bus.id)}
                    >
                      <div className="relative group">
                        <div
                          className={`w-12 h-12 ${
                            bus.status === 'active' ? 'bg-blue-500' : 'bg-yellow-500'
                          } rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-125 ${
                            selectedBus === bus.id ? 'ring-4 ring-blue-400 scale-125' : ''
                          }`}
                        >
                          <Bus className="w-6 h-6 text-white" />
                        </div>
                        {bus.status === 'active' && (
                          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                        )}

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          <div className="glass rounded-lg px-3 py-2 text-xs">
                            <div className="font-semibold">{bus.name}</div>
                            <div className="text-gray-400">{bus.speed} km/h</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 glass rounded-lg px-4 py-3">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <span>Active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <span>Idle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <span>Alert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bus List */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-2xl p-6 h-[600px] overflow-y-auto"
              >
                <h2 className="text-xl font-semibold mb-4">Active Buses</h2>
                <div className="space-y-3">
                  {buses.map((bus) => (
                    <div
                      key={bus.id}
                      onClick={() => setSelectedBus(bus.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        selectedBus === bus.id
                          ? 'bg-blue-600/20 border-2 border-blue-500'
                          : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(bus.status)} animate-pulse`} />
                          <div>
                            <div className="font-semibold text-sm">{bus.name}</div>
                            <div className="text-xs text-gray-400">{bus.id}</div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-blue-400">{bus.eta}</div>
                      </div>

                      <div className="space-y-2 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                          <Navigation className="w-3 h-3" />
                          <span>{bus.route}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{bus.students} students</span>
                        </div>
                        {bus.status === 'active' && (
                          <div className="flex items-center gap-2">
                            <Zap className="w-3 h-3" />
                            <span>{bus.speed} km/h</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-400">
                        Driver: {bus.driver}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
