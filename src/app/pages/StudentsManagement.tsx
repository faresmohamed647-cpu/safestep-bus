import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Plus, Edit, Trash2, User, MapPin, Phone, Mail, Bus } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  grade: string;
  parent: string;
  phone: string;
  email: string;
  address: string;
  bus: string;
  route: string;
  pickup: string;
  dropoff: string;
  status: 'active' | 'inactive';
}

export default function StudentsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('all');
  
  const [students] = useState<Student[]>([
    {
      id: 'STD001',
      name: 'Emma Wilson',
      grade: 'Grade 5',
      parent: 'Jennifer Wilson',
      phone: '+1 (555) 111-2222',
      email: 'j.wilson@email.com',
      address: '123 Oak Street',
      bus: 'Bus 1',
      route: 'Route A',
      pickup: '7:30 AM',
      dropoff: '3:45 PM',
      status: 'active',
    },
    {
      id: 'STD002',
      name: 'Oliver Brown',
      grade: 'Grade 7',
      parent: 'Michael Brown',
      phone: '+1 (555) 222-3333',
      email: 'm.brown@email.com',
      address: '456 Pine Avenue',
      bus: 'Bus 2',
      route: 'Route B',
      pickup: '7:45 AM',
      dropoff: '4:00 PM',
      status: 'active',
    },
    {
      id: 'STD003',
      name: 'Sophia Martinez',
      grade: 'Grade 6',
      parent: 'Maria Martinez',
      phone: '+1 (555) 333-4444',
      email: 'm.martinez@email.com',
      address: '789 Maple Drive',
      bus: 'Bus 1',
      route: 'Route A',
      pickup: '7:35 AM',
      dropoff: '3:50 PM',
      status: 'active',
    },
    {
      id: 'STD004',
      name: 'Liam Johnson',
      grade: 'Grade 8',
      parent: 'Sarah Johnson',
      phone: '+1 (555) 444-5555',
      email: 's.johnson@email.com',
      address: '321 Elm Street',
      bus: 'Bus 3',
      route: 'Route C',
      pickup: '7:20 AM',
      dropoff: '3:55 PM',
      status: 'active',
    },
    {
      id: 'STD005',
      name: 'Ava Davis',
      grade: 'Grade 5',
      parent: 'Emily Davis',
      phone: '+1 (555) 555-6666',
      email: 'e.davis@email.com',
      address: '654 Cedar Lane',
      bus: 'Bus 2',
      route: 'Route B',
      pickup: '7:50 AM',
      dropoff: '4:05 PM',
      status: 'active',
    },
    {
      id: 'STD006',
      name: 'Noah Anderson',
      grade: 'Grade 7',
      parent: 'David Anderson',
      phone: '+1 (555) 666-7777',
      email: 'd.anderson@email.com',
      address: '987 Birch Road',
      bus: 'Bus 4',
      route: 'Route D',
      pickup: '7:25 AM',
      dropoff: '3:40 PM',
      status: 'active',
    },
  ]);

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.parent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.bus.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGrade = filterGrade === 'all' || student.grade === filterGrade;
    
    return matchesSearch && matchesGrade;
  });

  const grades = ['all', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'];

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
                Students <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Management</span>
              </h1>
              <p className="text-gray-400">Manage student information and bus assignments</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add Student
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Students', value: students.length, color: 'blue' },
              { label: 'Active', value: students.filter((s) => s.status === 'active').length, color: 'green' },
              { label: 'Buses Assigned', value: '5', color: 'purple' },
              { label: 'Routes', value: '4', color: 'yellow' },
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

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name, parent, or bus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <select
              value={filterGrade}
              onChange={(e) => setFilterGrade(e.target.value)}
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
            >
              {grades.map((grade) => (
                <option key={grade} value={grade} className="bg-[#0a0a0f]">
                  {grade === 'all' ? 'All Grades' : grade}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Students Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Student</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Grade</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Parent</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Contact</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Bus Assignment</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Schedule</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, i) => (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-sm font-bold">
                          {student.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-xs text-gray-400">{student.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                        {student.grade}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">{student.parent}</div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3" />
                          <span>{student.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3" />
                          <span>{student.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Bus className="w-4 h-4 text-blue-400" />
                        <div>
                          <div className="font-medium">{student.bus}</div>
                          <div className="text-xs text-gray-400">{student.route}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm space-y-1">
                        <div className="text-green-400">↑ {student.pickup}</div>
                        <div className="text-orange-400">↓ {student.dropoff}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="p-2 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors">
                          <Edit className="w-4 h-4 text-blue-400" />
                        </button>
                        <button className="p-2 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition-colors">
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-20">
              <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <div className="text-gray-400 mb-2">No students found</div>
              <div className="text-sm text-gray-500">Try adjusting your search or filters</div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
