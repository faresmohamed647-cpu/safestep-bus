import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Phone, Mail, MapPin, Award, Clock } from 'lucide-react';

interface Driver {
  id: string;
  name: string;
  phone: string;
  email: string;
  license: string;
  experience: string;
  bus: string;
  route: string;
  status: 'active' | 'off-duty' | 'on-leave';
  rating: number;
  trips: number;
}

export default function DriversManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [drivers] = useState<Driver[]>([
    {
      id: 'DRV001',
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@school.com',
      license: 'DL-2024-001',
      experience: '8 years',
      bus: 'Bus 1',
      route: 'Route A',
      status: 'active',
      rating: 4.8,
      trips: 1250,
    },
    {
      id: 'DRV002',
      name: 'Sarah Johnson',
      phone: '+1 (555) 234-5678',
      email: 'sarah.j@school.com',
      license: 'DL-2024-002',
      experience: '6 years',
      bus: 'Bus 2',
      route: 'Route B',
      status: 'active',
      rating: 4.9,
      trips: 980,
    },
    {
      id: 'DRV003',
      name: 'Michael Brown',
      phone: '+1 (555) 345-6789',
      email: 'michael.b@school.com',
      license: 'DL-2024-003',
      experience: '10 years',
      bus: 'Bus 3',
      route: 'Route C',
      status: 'active',
      rating: 4.7,
      trips: 1580,
    },
    {
      id: 'DRV004',
      name: 'Emily Davis',
      phone: '+1 (555) 456-7890',
      email: 'emily.d@school.com',
      license: 'DL-2024-004',
      experience: '5 years',
      bus: 'Bus 4',
      route: 'Route D',
      status: 'off-duty',
      rating: 4.6,
      trips: 750,
    },
    {
      id: 'DRV005',
      name: 'David Wilson',
      phone: '+1 (555) 567-8901',
      email: 'david.w@school.com',
      license: 'DL-2024-005',
      experience: '7 years',
      bus: 'Bus 5',
      route: 'Route E',
      status: 'active',
      rating: 4.8,
      trips: 1100,
    },
  ]);

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.bus.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-600/20 text-green-400';
      case 'off-duty':
        return 'bg-gray-600/20 text-gray-400';
      case 'on-leave':
        return 'bg-yellow-600/20 text-yellow-400';
      default:
        return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Drivers <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Management</span>
              </h1>
              <p className="text-gray-400">Manage your driver team and assignments</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add Driver
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Drivers', value: drivers.length, color: 'blue' },
              { label: 'Active Now', value: drivers.filter((d) => d.status === 'active').length, color: 'green' },
              { label: 'Avg Rating', value: '4.8', color: 'yellow' },
              { label: 'Total Trips', value: '5.6K', color: 'purple' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search drivers by name, bus, or route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* Drivers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrivers.map((driver, i) => (
            <motion.div
              key={driver.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
                    {driver.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{driver.name}</div>
                    <div className="text-xs text-gray-400">{driver.id}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(driver.status)}`}>
                  {driver.status.replace('-', ' ')}
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{driver.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{driver.email}</span>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-400 text-xs mb-1">License</div>
                  <div className="font-medium">{driver.license}</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-400 text-xs mb-1">Experience</div>
                  <div className="font-medium">{driver.experience}</div>
                </div>
              </div>

              {/* Assignment */}
              <div className="p-3 bg-blue-600/10 border border-blue-500/30 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-sm mb-1">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">{driver.bus} - {driver.route}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">Rating: <span className="font-semibold">{driver.rating}/5.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{driver.trips} trips</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-600/20 rounded-lg text-sm font-medium hover:bg-blue-600/30 transition-colors flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-600/20 rounded-lg text-sm font-medium hover:bg-red-600/30 transition-colors">
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDrivers.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-2">No drivers found</div>
            <div className="text-sm text-gray-500">Try adjusting your search criteria</div>
          </div>
        )}
      </div>
    </div>
  );
}
