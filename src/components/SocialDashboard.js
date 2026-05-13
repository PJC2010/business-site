"use client";

import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  PLATFORMS, PLATFORM_META, DATE_RANGES,
  buildTimeSeries, computeKPIs, computePlatformBreakdown, computeEngagementSeries,
} from '@/lib/dashboardData';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const fmt$ = (n) => '$' + n.toLocaleString('en-US');
const fmtK = (n) => n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n);

const CHART = {
  grid:    '#272727',
  tick:    '#A1A1A1',
  tooltip: { backgroundColor: '#141414', border: '1px solid #272727', borderRadius: '8px', fontSize: '12px' },
  label:   { color: '#FFFFFF' },
  item:    { color: '#A1A1A1' },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <p className="text-xs font-medium text-accent uppercase tracking-widest mb-1">Analytics</p>
        <h2 className="text-2xl font-extrabold text-primary tracking-tight">Social Media Performance</h2>
        <p className="text-secondary text-sm mt-1">Interactive revenue dashboard — Jan–Dec 2024</p>
      </div>
      <span className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium whitespace-nowrap">
        Demo Data
      </span>
    </div>
  );
}

function FilterBar({ activeRange, activePlatforms, onRangeChange, onPlatformToggle }) {
  const allActive = activePlatforms.size === PLATFORMS.length;
  return (
    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
      {/* Date range */}
      <div className="flex gap-2">
        {Object.entries(DATE_RANGES).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => onRangeChange(key)}
            className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
              activeRange === key
                ? 'bg-accent text-background border-accent'
                : 'bg-card text-secondary border-border hover:text-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Platform toggles */}
      <div className="flex gap-2 flex-wrap sm:ml-auto">
        <button
          onClick={() => onPlatformToggle('all')}
          className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
            allActive
              ? 'bg-accent text-background border-accent'
              : 'bg-card text-secondary border-border hover:text-primary'
          }`}
        >
          All
        </button>
        {PLATFORMS.map((p) => (
          <button
            key={p}
            onClick={() => onPlatformToggle(p)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
              activePlatforms.has(p)
                ? 'bg-card text-primary border-border'
                : 'bg-background text-secondary border-border opacity-40 hover:opacity-70'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: PLATFORM_META[p].color }}
            />
            {PLATFORM_META[p].label}
          </button>
        ))}
      </div>
    </div>
  );
}

function DashboardStatCard({ label, value, delta }) {
  const positive = delta > 0;
  const neutral  = delta === 0;
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex flex-col gap-1">
      <span className="text-xs font-medium text-secondary uppercase tracking-widest">{label}</span>
      <span className="text-2xl font-bold text-primary">{value}</span>
      {!neutral && (
        <span className={`flex items-center gap-1 text-xs font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
          {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {positive ? '+' : ''}{delta}% vs prior period
        </span>
      )}
    </div>
  );
}

function KPISummaryRow({ kpis }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardStatCard label="Total Revenue"  value={fmt$(kpis.totalRevenue)}  delta={kpis.deltas.revenue}   />
      <DashboardStatCard label="Total Ad Spend" value={fmt$(kpis.totalAdSpend)}  delta={kpis.deltas.adSpend}   />
      <DashboardStatCard label="Avg ROAS"        value={kpis.avgROAS.toFixed(2) + 'x'} delta={kpis.deltas.roas} />
      <DashboardStatCard label="Followers Gained" value={fmtK(kpis.totalFollowers)} delta={kpis.deltas.followers} />
    </div>
  );
}

function RevenueChart({ data, platforms }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">Revenue Over Time</h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
          <defs>
            {platforms.map((p) => (
              <linearGradient key={p} id={`grad-${p}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={PLATFORM_META[p].color} stopOpacity={0.25} />
                <stop offset="95%" stopColor={PLATFORM_META[p].color} stopOpacity={0}    />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART.grid} vertical={false} />
          <XAxis dataKey="month" stroke={CHART.tick} tick={{ fill: CHART.tick, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis stroke={CHART.tick} tick={{ fill: CHART.tick, fontSize: 11 }} axisLine={false} tickLine={false}
                 tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} width={44} />
          <Tooltip contentStyle={CHART.tooltip} labelStyle={CHART.label} itemStyle={CHART.item}
                   formatter={(v) => [`$${v.toLocaleString()}`, undefined]} />
          <Legend wrapperStyle={{ fontSize: '12px', color: CHART.tick, paddingTop: '12px' }} />
          {platforms.map((p) => (
            <Area key={p} type="monotone" dataKey={p} name={PLATFORM_META[p].label}
                  stroke={PLATFORM_META[p].color} fill={`url(#grad-${p})`} strokeWidth={2} dot={false} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function PlatformBreakdown({ breakdown }) {
  const total = breakdown.reduce((s, r) => s + r.revenue, 0);
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col">
      <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Revenue Split</h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie data={breakdown} dataKey="revenue" nameKey="platform" cx="50%" cy="50%"
               innerRadius={52} outerRadius={82} paddingAngle={3}>
            {breakdown.map((entry) => (
              <Cell key={entry.platform} fill={PLATFORM_META[entry.platform].color} />
            ))}
          </Pie>
          <Tooltip contentStyle={CHART.tooltip} labelStyle={CHART.label}
                   formatter={(v, name) => [`$${v.toLocaleString()}`, PLATFORM_META[name]?.label ?? name]} />
        </PieChart>
      </ResponsiveContainer>

      <table className="mt-4 w-full text-xs">
        <thead>
          <tr className="text-secondary uppercase tracking-wider">
            <th className="text-left pb-2 font-medium">Platform</th>
            <th className="text-right pb-2 font-medium">Revenue</th>
            <th className="text-right pb-2 font-medium">ROAS</th>
            <th className="text-right pb-2 font-medium hidden sm:table-cell">Share</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {breakdown.map((row) => (
            <tr key={row.platform}>
              <td className="py-2 text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: PLATFORM_META[row.platform].color }} />
                {PLATFORM_META[row.platform].label}
              </td>
              <td className="py-2 text-right text-primary">{fmt$(row.revenue)}</td>
              <td className="py-2 text-right text-primary">{row.roas.toFixed(2)}x</td>
              <td className="py-2 text-right text-secondary hidden sm:table-cell">
                {total > 0 ? Math.round((row.revenue / total) * 100) : 0}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EngagementChart({ data, platforms }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <h3 className="text-sm font-semibold text-primary uppercase tracking-widest">Engagement Rate by Platform</h3>
        <span className="text-xs text-secondary">(likes + comments + shares) ÷ impressions</span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke={CHART.grid} vertical={false} />
          <XAxis dataKey="month" stroke={CHART.tick} tick={{ fill: CHART.tick, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis stroke={CHART.tick} tick={{ fill: CHART.tick, fontSize: 11 }} axisLine={false} tickLine={false}
                 tickFormatter={(v) => `${v}%`} width={36} />
          <Tooltip contentStyle={CHART.tooltip} labelStyle={CHART.label} itemStyle={CHART.item}
                   formatter={(v) => [`${v}%`, undefined]} />
          <Legend wrapperStyle={{ fontSize: '12px', color: CHART.tick, paddingTop: '12px' }} />
          {platforms.map((p) => (
            <Bar key={p} dataKey={p} name={PLATFORM_META[p].label}
                 fill={PLATFORM_META[p].color} radius={[3, 3, 0, 0]} maxBarSize={20} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ROASCards({ breakdown, months }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {breakdown.map((row) => {
        const positive = row.roasDelta >= 0;
        return (
          <div key={row.platform} className="bg-card border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: PLATFORM_META[row.platform].color }} />
              <span className="text-xs font-medium text-secondary uppercase tracking-widest">{PLATFORM_META[row.platform].label}</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-primary">{row.roas.toFixed(2)}x</span>
              <p className="text-xs text-secondary mt-0.5">ROAS</p>
            </div>
            {row.roasDelta !== 0 && (
              <span className={`flex items-center gap-1 text-xs font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
                {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {positive ? '+' : ''}{row.roasDelta}x vs prior
              </span>
            )}
            <div className="pt-2 border-t border-border space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-secondary">Ad Spend</span>
                <span className="text-primary">{fmt$(row.adSpend)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-secondary">Revenue</span>
                <span className="text-primary">{fmt$(row.revenue)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────

export default function SocialDashboard() {
  const [activeRange, setActiveRange] = useState('90d');
  const [activePlatforms, setActivePlatforms] = useState(new Set(PLATFORMS));

  const handlePlatformToggle = (platform) => {
    if (platform === 'all') {
      setActivePlatforms(new Set(PLATFORMS));
      return;
    }
    setActivePlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(platform) && next.size > 1) {
        next.delete(platform);
      } else {
        next.add(platform);
      }
      return next;
    });
  };

  const rangeMonths      = DATE_RANGES[activeRange].months;
  const selectedPlatforms = [...activePlatforms];
  const timeSeries       = buildTimeSeries().slice(-rangeMonths);
  const kpis             = computeKPIs(selectedPlatforms, rangeMonths);
  const breakdown        = computePlatformBreakdown(selectedPlatforms, rangeMonths);
  const engagementSeries = computeEngagementSeries(selectedPlatforms, rangeMonths);

  return (
    <div className="space-y-6">
      <SectionHeader />
      <FilterBar
        activeRange={activeRange}
        activePlatforms={activePlatforms}
        onRangeChange={setActiveRange}
        onPlatformToggle={handlePlatformToggle}
      />
      <KPISummaryRow kpis={kpis} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={timeSeries} platforms={selectedPlatforms} />
        </div>
        <div className="lg:col-span-1">
          <PlatformBreakdown breakdown={breakdown} />
        </div>
      </div>
      <EngagementChart data={engagementSeries} platforms={selectedPlatforms} />
      <ROASCards breakdown={breakdown} months={rangeMonths} />
    </div>
  );
}
