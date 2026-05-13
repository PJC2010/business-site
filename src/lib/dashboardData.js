export const PLATFORMS = ['instagram', 'tiktok', 'youtube', 'facebook'];

export const PLATFORM_META = {
  instagram: { label: 'Instagram', color: '#E1306C' },
  tiktok:    { label: 'TikTok',    color: '#69C9D0' },
  youtube:   { label: 'YouTube',   color: '#FF0000' },
  facebook:  { label: 'Facebook',  color: '#1877F2' },
};

export const DATE_RANGES = {
  '30d': { label: 'Last 30 Days',    months: 1  },
  '90d': { label: 'Last 90 Days',    months: 3  },
  '1yr': { label: 'Last 12 Months',  months: 12 },
};

// Raw monthly data per platform — Jan through Dec 2024
const PLATFORM_DATA = {
  instagram: [
    { month: 'Jan', date: '2024-01-01', revenue: 4200,  adSpend: 1100, roas: 3.82, followers: 840,  impressions: 210000, engagementRate: 4.1, clicks: 8600  },
    { month: 'Feb', date: '2024-02-01', revenue: 4500,  adSpend: 1180, roas: 3.81, followers: 920,  impressions: 225000, engagementRate: 4.3, clicks: 9200  },
    { month: 'Mar', date: '2024-03-01', revenue: 5800,  adSpend: 1450, roas: 4.00, followers: 1140, impressions: 270000, engagementRate: 4.6, clicks: 11400 },
    { month: 'Apr', date: '2024-04-01', revenue: 6100,  adSpend: 1520, roas: 4.01, followers: 1200, impressions: 285000, engagementRate: 4.5, clicks: 12000 },
    { month: 'May', date: '2024-05-01', revenue: 6400,  adSpend: 1580, roas: 4.05, followers: 1260, impressions: 298000, engagementRate: 4.7, clicks: 12600 },
    { month: 'Jun', date: '2024-06-01', revenue: 7200,  adSpend: 1740, roas: 4.14, followers: 1420, impressions: 330000, engagementRate: 5.0, clicks: 14200 },
    { month: 'Jul', date: '2024-07-01', revenue: 6900,  adSpend: 1680, roas: 4.11, followers: 1360, impressions: 318000, engagementRate: 4.8, clicks: 13600 },
    { month: 'Aug', date: '2024-08-01', revenue: 7100,  adSpend: 1720, roas: 4.13, followers: 1400, impressions: 326000, engagementRate: 4.9, clicks: 14000 },
    { month: 'Sep', date: '2024-09-01', revenue: 7800,  adSpend: 1870, roas: 4.17, followers: 1540, impressions: 356000, engagementRate: 5.1, clicks: 15400 },
    { month: 'Oct', date: '2024-10-01', revenue: 9200,  adSpend: 2160, roas: 4.26, followers: 1820, impressions: 410000, engagementRate: 5.4, clicks: 18200 },
    { month: 'Nov', date: '2024-11-01', revenue: 11500, adSpend: 2600, roas: 4.42, followers: 2280, impressions: 500000, engagementRate: 5.8, clicks: 22800 },
    { month: 'Dec', date: '2024-12-01', revenue: 13200, adSpend: 2900, roas: 4.55, followers: 2620, impressions: 568000, engagementRate: 6.1, clicks: 26200 },
  ],
  tiktok: [
    { month: 'Jan', date: '2024-01-01', revenue: 2800,  adSpend: 590,  roas: 4.75, followers: 1600, impressions: 420000, engagementRate: 6.2, clicks: 6800  },
    { month: 'Feb', date: '2024-02-01', revenue: 3100,  adSpend: 640,  roas: 4.84, followers: 1800, impressions: 460000, engagementRate: 6.4, clicks: 7400  },
    { month: 'Mar', date: '2024-03-01', revenue: 4200,  adSpend: 840,  roas: 5.00, followers: 2400, impressions: 600000, engagementRate: 6.8, clicks: 9800  },
    { month: 'Apr', date: '2024-04-01', revenue: 4600,  adSpend: 910,  roas: 5.05, followers: 2600, impressions: 650000, engagementRate: 7.0, clicks: 10600 },
    { month: 'May', date: '2024-05-01', revenue: 5000,  adSpend: 980,  roas: 5.10, followers: 2800, impressions: 700000, engagementRate: 7.1, clicks: 11400 },
    { month: 'Jun', date: '2024-06-01', revenue: 5500,  adSpend: 1060, roas: 5.19, followers: 3100, impressions: 770000, engagementRate: 7.4, clicks: 12600 },
    { month: 'Jul', date: '2024-07-01', revenue: 5200,  adSpend: 1010, roas: 5.15, followers: 2940, impressions: 735000, engagementRate: 7.2, clicks: 11900 },
    { month: 'Aug', date: '2024-08-01', revenue: 5400,  adSpend: 1040, roas: 5.19, followers: 3040, impressions: 760000, engagementRate: 7.3, clicks: 12200 },
    { month: 'Sep', date: '2024-09-01', revenue: 6100,  adSpend: 1160, roas: 5.26, followers: 3440, impressions: 860000, engagementRate: 7.6, clicks: 13800 },
    { month: 'Oct', date: '2024-10-01', revenue: 7400,  adSpend: 1380, roas: 5.36, followers: 4200, impressions: 1040000, engagementRate: 7.9, clicks: 16800 },
    { month: 'Nov', date: '2024-11-01', revenue: 9800,  adSpend: 1780, roas: 5.51, followers: 5600, impressions: 1380000, engagementRate: 8.3, clicks: 22200 },
    { month: 'Dec', date: '2024-12-01', revenue: 11200, adSpend: 2000, roas: 5.60, followers: 6400, impressions: 1560000, engagementRate: 8.6, clicks: 25400 },
  ],
  youtube: [
    { month: 'Jan', date: '2024-01-01', revenue: 5100,  adSpend: 1400, roas: 3.64, followers: 520,  impressions: 180000, engagementRate: 3.8, clicks: 7200  },
    { month: 'Feb', date: '2024-02-01', revenue: 5400,  adSpend: 1460, roas: 3.70, followers: 560,  impressions: 190000, engagementRate: 3.9, clicks: 7600  },
    { month: 'Mar', date: '2024-03-01', revenue: 6200,  adSpend: 1640, roas: 3.78, followers: 640,  impressions: 214000, engagementRate: 4.1, clicks: 8800  },
    { month: 'Apr', date: '2024-04-01', revenue: 6800,  adSpend: 1780, roas: 3.82, followers: 700,  impressions: 234000, engagementRate: 4.2, clicks: 9600  },
    { month: 'May', date: '2024-05-01', revenue: 7100,  adSpend: 1840, roas: 3.86, followers: 730,  impressions: 244000, engagementRate: 4.3, clicks: 10000 },
    { month: 'Jun', date: '2024-06-01', revenue: 7800,  adSpend: 1990, roas: 3.92, followers: 800,  impressions: 266000, engagementRate: 4.5, clicks: 11000 },
    { month: 'Jul', date: '2024-07-01', revenue: 7500,  adSpend: 1930, roas: 3.89, followers: 770,  impressions: 258000, engagementRate: 4.4, clicks: 10600 },
    { month: 'Aug', date: '2024-08-01', revenue: 7700,  adSpend: 1960, roas: 3.93, followers: 790,  impressions: 263000, engagementRate: 4.4, clicks: 10800 },
    { month: 'Sep', date: '2024-09-01', revenue: 8400,  adSpend: 2100, roas: 4.00, followers: 860,  impressions: 284000, engagementRate: 4.6, clicks: 11800 },
    { month: 'Oct', date: '2024-10-01', revenue: 9800,  adSpend: 2400, roas: 4.08, followers: 1000, impressions: 328000, engagementRate: 4.8, clicks: 13800 },
    { month: 'Nov', date: '2024-11-01', revenue: 12100, adSpend: 2880, roas: 4.20, followers: 1240, impressions: 400000, engagementRate: 5.1, clicks: 17200 },
    { month: 'Dec', date: '2024-12-01', revenue: 14300, adSpend: 3300, roas: 4.33, followers: 1460, impressions: 466000, engagementRate: 5.4, clicks: 20200 },
  ],
  facebook: [
    { month: 'Jan', date: '2024-01-01', revenue: 3600,  adSpend: 1000, roas: 3.60, followers: 380,  impressions: 160000, engagementRate: 2.8, clicks: 5200  },
    { month: 'Feb', date: '2024-02-01', revenue: 3900,  adSpend: 1080, roas: 3.61, followers: 410,  impressions: 172000, engagementRate: 2.9, clicks: 5600  },
    { month: 'Mar', date: '2024-03-01', revenue: 5100,  adSpend: 1400, roas: 3.64, followers: 540,  impressions: 220000, engagementRate: 3.1, clicks: 7200  },
    { month: 'Apr', date: '2024-04-01', revenue: 5400,  adSpend: 1480, roas: 3.65, followers: 570,  impressions: 232000, engagementRate: 3.2, clicks: 7600  },
    { month: 'May', date: '2024-05-01', revenue: 5700,  adSpend: 1560, roas: 3.65, followers: 600,  impressions: 244000, engagementRate: 3.2, clicks: 8000  },
    { month: 'Jun', date: '2024-06-01', revenue: 6300,  adSpend: 1700, roas: 3.71, followers: 660,  impressions: 266000, engagementRate: 3.4, clicks: 8800  },
    { month: 'Jul', date: '2024-07-01', revenue: 6000,  adSpend: 1640, roas: 3.66, followers: 630,  impressions: 256000, engagementRate: 3.3, clicks: 8400  },
    { month: 'Aug', date: '2024-08-01', revenue: 6200,  adSpend: 1680, roas: 3.69, followers: 650,  impressions: 262000, engagementRate: 3.3, clicks: 8700  },
    { month: 'Sep', date: '2024-09-01', revenue: 7000,  adSpend: 1880, roas: 3.72, followers: 740,  impressions: 294000, engagementRate: 3.5, clicks: 9800  },
    { month: 'Oct', date: '2024-10-01', revenue: 8200,  adSpend: 2180, roas: 3.76, followers: 860,  impressions: 340000, engagementRate: 3.7, clicks: 11600 },
    { month: 'Nov', date: '2024-11-01', revenue: 10400, adSpend: 2720, roas: 3.82, followers: 1100, impressions: 424000, engagementRate: 4.0, clicks: 14700 },
    { month: 'Dec', date: '2024-12-01', revenue: 12100, adSpend: 3080, roas: 3.93, followers: 1280, impressions: 488000, engagementRate: 4.2, clicks: 17100 },
  ],
};

// Merged monthly array — one entry per month with all 4 platform revenue values.
// This is the shape Recharts expects for multi-series charts.
export function buildTimeSeries() {
  return PLATFORM_DATA.instagram.map((row, i) => ({
    month:     row.month,
    date:      row.date,
    instagram: PLATFORM_DATA.instagram[i].revenue,
    tiktok:    PLATFORM_DATA.tiktok[i].revenue,
    youtube:   PLATFORM_DATA.youtube[i].revenue,
    facebook:  PLATFORM_DATA.facebook[i].revenue,
  }));
}

// Returns the last `months` entries of a platform's data array.
function getSlice(platform, months) {
  return PLATFORM_DATA[platform].slice(-months);
}

// Returns the entries immediately before the slice (for delta calculation).
function getPriorSlice(platform, months) {
  const total = PLATFORM_DATA[platform].length;
  const start = Math.max(0, total - months * 2);
  const end   = total - months;
  return PLATFORM_DATA[platform].slice(start, end);
}

export function computeKPIs(platforms, months) {
  let totalRevenue = 0, totalAdSpend = 0, totalFollowers = 0;
  let priorRevenue = 0, priorAdSpend = 0, priorFollowers = 0;

  platforms.forEach((p) => {
    const slice = getSlice(p, months);
    const prior = getPriorSlice(p, months);
    slice.forEach((r) => { totalRevenue += r.revenue; totalAdSpend += r.adSpend; totalFollowers += r.followers; });
    prior.forEach((r) => { priorRevenue += r.revenue; priorAdSpend += r.adSpend; priorFollowers += r.followers; });
  });

  const avgROAS = totalAdSpend > 0 ? totalRevenue / totalAdSpend : 0;
  const priorROAS = priorAdSpend > 0 ? priorRevenue / priorAdSpend : 0;

  const pct = (curr, prev) => prev === 0 ? 0 : Math.round(((curr - prev) / prev) * 100);

  return {
    totalRevenue,
    totalAdSpend,
    avgROAS,
    totalFollowers,
    deltas: {
      revenue:   pct(totalRevenue,   priorRevenue),
      adSpend:   pct(totalAdSpend,   priorAdSpend),
      roas:      pct(avgROAS,        priorROAS),
      followers: pct(totalFollowers, priorFollowers),
    },
  };
}

export function computePlatformBreakdown(platforms, months) {
  return platforms.map((p) => {
    const slice = getSlice(p, months);
    const prior = getPriorSlice(p, months);
    const revenue   = slice.reduce((s, r) => s + r.revenue,         0);
    const adSpend   = slice.reduce((s, r) => s + r.adSpend,         0);
    const followers = slice.reduce((s, r) => s + r.followers,       0);
    const engRate   = slice.reduce((s, r) => s + r.engagementRate,  0) / slice.length;
    const roas      = adSpend > 0 ? revenue / adSpend : 0;

    const priorRev  = prior.reduce((s, r) => s + r.revenue, 0);
    const priorROAS = prior.length > 0 ? priorRev / prior.reduce((s, r) => s + r.adSpend, 0) : 0;
    const roasDelta = priorROAS > 0 ? +(roas - priorROAS).toFixed(2) : 0;

    return { platform: p, revenue, adSpend, followers, engRate: +engRate.toFixed(1), roas: +roas.toFixed(2), roasDelta };
  });
}

export function computeEngagementSeries(platforms, months) {
  const base = getSlice('instagram', months).map((r) => r.month);
  return base.map((month, i) => {
    const entry = { month };
    platforms.forEach((p) => {
      const slice = getSlice(p, months);
      entry[p] = slice[i]?.engagementRate ?? 0;
    });
    return entry;
  });
}
