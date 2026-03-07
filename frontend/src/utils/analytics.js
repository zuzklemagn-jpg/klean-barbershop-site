// Simple Analytics Tracker for KLEAN Barbershop
// Tracks page views, booking clicks, and user interactions

const STORAGE_KEY = 'klean_analytics';

// Initialize or get analytics data
const getAnalyticsData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {
      pageViews: {},
      bookingClicks: 0,
      totalVisits: 0,
      firstVisit: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      events: []
    };
  } catch {
    return { pageViews: {}, bookingClicks: 0, totalVisits: 0, events: [] };
  }
};

// Save analytics data
const saveAnalyticsData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Analytics: Unable to save data', e);
  }
};

// Track page view
export const trackPageView = (pageName) => {
  const data = getAnalyticsData();
  
  // Increment page view
  data.pageViews[pageName] = (data.pageViews[pageName] || 0) + 1;
  data.totalVisits += 1;
  data.lastVisit = new Date().toISOString();
  
  // Log event
  data.events.push({
    type: 'page_view',
    page: pageName,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 100 events
  if (data.events.length > 100) {
    data.events = data.events.slice(-100);
  }
  
  saveAnalyticsData(data);
  
  // Console log for debugging (can be removed in production)
  console.log(`📊 Analytics: Page view - ${pageName}`);
};

// Track booking button click
export const trackBookingClick = (source) => {
  const data = getAnalyticsData();
  
  data.bookingClicks += 1;
  
  data.events.push({
    type: 'booking_click',
    source: source,
    timestamp: new Date().toISOString()
  });
  
  saveAnalyticsData(data);
  
  console.log(`📊 Analytics: Booking click from - ${source}`);
};

// Track custom event
export const trackEvent = (eventName, eventData = {}) => {
  const data = getAnalyticsData();
  
  data.events.push({
    type: 'custom',
    name: eventName,
    data: eventData,
    timestamp: new Date().toISOString()
  });
  
  saveAnalyticsData(data);
  
  console.log(`📊 Analytics: Custom event - ${eventName}`, eventData);
};

// Get analytics summary
export const getAnalyticsSummary = () => {
  const data = getAnalyticsData();
  
  return {
    totalPageViews: Object.values(data.pageViews).reduce((a, b) => a + b, 0),
    pageViewsBreakdown: data.pageViews,
    totalBookingClicks: data.bookingClicks,
    totalVisits: data.totalVisits,
    firstVisit: data.firstVisit,
    lastVisit: data.lastVisit,
    recentEvents: data.events.slice(-10)
  };
};

// Analytics hook for components
export const useAnalytics = () => {
  return {
    trackPageView,
    trackBookingClick,
    trackEvent,
    getAnalyticsSummary
  };
};

export default {
  trackPageView,
  trackBookingClick,
  trackEvent,
  getAnalyticsSummary
};
