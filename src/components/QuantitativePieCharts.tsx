"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function QuantitativePieCharts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      {/* Pie Chart 1 */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <p className="font-medium mb-4">How do you currently coordinate food pickups?</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie dataKey="value" data={[
              { name: 'Direct phone calls', value: 40 },
              { name: 'WhatsApp messages', value: 35 },
              { name: 'In-person coordination', value: 25 },
            ]} cx="50%" cy="50%" outerRadius={60} label>
              <Cell fill="#4CAF50" />
              <Cell fill="#FFC107" />
              <Cell fill="#2196F3" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Pie Chart 2 */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <p className="font-medium mb-4">What type of food donations would be most suitable?</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie dataKey="value" data={[
              { name: 'Prepared Meals', value: 60 },
              { name: 'Raw Ingredients', value: 10 },
              { name: 'Other', value: 30 },
            ]} cx="50%" cy="50%" outerRadius={60} label>
              <Cell fill="#FF9800" />
              <Cell fill="#8BC34A" />
              <Cell fill="#00BCD4" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Pie Chart 3 */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <p className="font-medium mb-4">Do you face challenges with volunteer availability?</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie dataKey="value" data={[
              { name: 'Frequently', value: 50 },
              { name: 'Sometimes', value: 30 },
              { name: 'Rarely', value: 20 },
            ]} cx="50%" cy="50%" outerRadius={60} label>
              <Cell fill="#E91E63" />
              <Cell fill="#9C27B0" />
              <Cell fill="#03A9F4" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Pie Chart 4 */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <p className="font-medium mb-4">How often do you have surplus food to donate?</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie dataKey="value" data={[
              { name: 'Daily', value: 50 },
              { name: 'Weekly', value: 30 },
              { name: 'Occasionally', value: 20 },
            ]} cx="50%" cy="50%" outerRadius={60} label>
              <Cell fill="#FF5722" />
              <Cell fill="#607D8B" />
              <Cell fill="#CDDC39" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Pie Chart 5 */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <p className="font-medium mb-4">What concerns you the most about food donation?</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie dataKey="value" data={[
              { name: 'Food safety', value: 40 },
              { name: 'Misuse of food', value: 35 },
              { name: 'Logistic issues', value: 25 },
            ]} cx="50%" cy="50%" outerRadius={60} label>
              <Cell fill="#3F51B5" />
              <Cell fill="#FFEB3B" />
              <Cell fill="#009688" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Pie Chart 6 */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <p className="font-medium mb-4">Preferred time for food pickup?</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie dataKey="value" data={[
              { name: 'Morning', value: 45 },
              { name: 'Evening', value: 30 },
              { name: 'Afternoon', value: 25 },
            ]} cx="50%" cy="50%" outerRadius={60} label>
              <Cell fill="#FFB300" />
              <Cell fill="#00BFAE" />
              <Cell fill="#D84315" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 