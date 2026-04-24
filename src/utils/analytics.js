/**
 * Analytics utility
 * Infrastructure for event tracking — ready for Meta Pixel, Google Analytics, etc.
 */

// Track custom event
export function trackEvent(eventName, params = {}) {
  // Console log for development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, params);
  }

  // Google Analytics (gtag)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel (fbq)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }

  // Custom event for any other listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('eter:analytics', { 
      detail: { event: eventName, params } 
    }));
  }
}

// Track page view
export function trackPageView(page) {
  trackEvent('page_view', { page });
}

// Track CTA click
export function trackCTAClick(ctaId, location) {
  trackEvent('cta_click', { cta_id: ctaId, location });
}

// Track form interaction
export function trackFormInteraction(action, field) {
  trackEvent('form_interaction', { action, field });
}

// Initialize analytics (call once on app load)
export function initAnalytics() {
  // Log initialization
  if (import.meta.env.DEV) {
    console.log('[Analytics] Initialized — ready for GA4/Meta Pixel integration');
  }

  // Track initial page view
  trackPageView(window.location.pathname);

  // Track scroll depth
  let maxScroll = 0;
  const scrollHandler = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if ([25, 50, 75, 100].includes(scrollPercent)) {
        trackEvent('scroll_depth', { percent: scrollPercent });
      }
    }
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });

  // Track time on page
  const startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', { seconds: timeOnPage });
  });
}
