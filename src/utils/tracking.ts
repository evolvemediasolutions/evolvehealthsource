// Global declaration for Google Tag Manager / GA4 dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export interface TrackingData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  referrer?: string;
  landing_url?: string;
  [key: string]: string | undefined;
}

/**
 * Initializes and captures UTM parameters and referrer from the landing URL.
 * Stores them in sessionStorage so attribution persists throughout SPA navigation.
 */
export function initLandingTracking(): void {
  if (typeof window === 'undefined' || !window.sessionStorage) return;

  try {
    // 1. Capture landing referrer if not already saved
    // We only save the initial referrer on first touch to avoid overwriting with internal site URLs
    const storedReferrer = sessionStorage.getItem('referrer');
    if (storedReferrer === null) {
      const currentReferrer = document.referrer;
      // If external or empty, save it
      sessionStorage.setItem('referrer', currentReferrer || '');
    }

    // 2. Capture landing URL on first touch
    if (!sessionStorage.getItem('landing_url')) {
      sessionStorage.setItem('landing_url', window.location.href);
    }

    // 3. Capture all query parameters starting with 'utm_' or known ad click IDs
    const searchParams = new URLSearchParams(window.location.search);
    const newUtms: Record<string, string> = {};

    searchParams.forEach((val, key) => {
      const lowerKey = key.toLowerCase();
      if (
        lowerKey.startsWith('utm_') ||
        lowerKey === 'gclid' ||
        lowerKey === 'fbclid' ||
        lowerKey === 'msclkid'
      ) {
        newUtms[lowerKey] = val;
        sessionStorage.setItem(lowerKey, val);
      }
    });

    // Merge into consolidated utm_data JSON in sessionStorage
    if (Object.keys(newUtms).length > 0) {
      let existingUtms: Record<string, string> = {};
      try {
        const raw = sessionStorage.getItem('utm_data');
        if (raw) existingUtms = JSON.parse(raw);
      } catch (e) {
        // Ignore json parse error
      }
      const updated = { ...existingUtms, ...newUtms };
      sessionStorage.setItem('utm_data', JSON.stringify(updated));
    }
  } catch (err) {
    console.warn('Unable to record landing tracking in sessionStorage:', err);
  }
}

/**
 * Retrieves all stored UTM fields, ad click IDs, referrer, and landing URL from sessionStorage.
 * Also checks the current URL search parameters as fallback.
 */
export function getTrackingData(): TrackingData {
  if (typeof window === 'undefined' || !window.sessionStorage) return {};

  const tracking: TrackingData = {};

  try {
    // 1. Load from consolidated JSON if present
    const rawData = sessionStorage.getItem('utm_data');
    if (rawData) {
      try {
        Object.assign(tracking, JSON.parse(rawData));
      } catch (e) {
        // Ignore
      }
    }

    // 2. Check individual keys in sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && (key.toLowerCase().startsWith('utm_') || ['gclid', 'fbclid', 'msclkid'].includes(key.toLowerCase()))) {
        const val = sessionStorage.getItem(key);
        if (val) tracking[key.toLowerCase()] = val;
      }
    }

    // 3. Fallback: inspect current URL params if not yet in sessionStorage
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((val, key) => {
      const lowerKey = key.toLowerCase();
      if (
        (lowerKey.startsWith('utm_') || ['gclid', 'fbclid', 'msclkid'].includes(lowerKey)) &&
        !tracking[lowerKey]
      ) {
        tracking[lowerKey] = val;
      }
    });

    // 4. Referrer (stored landing referrer or document.referrer)
    const storedReferrer = sessionStorage.getItem('referrer');
    const referrer = storedReferrer !== null ? storedReferrer : (document.referrer || '');
    if (referrer) {
      tracking.referrer = referrer;
    }

    // 5. Landing URL
    const landingUrl = sessionStorage.getItem('landing_url') || window.location.href;
    if (landingUrl) {
      tracking.landing_url = landingUrl;
    }
  } catch (err) {
    console.warn('Unable to retrieve tracking data:', err);
  }

  return tracking;
}

/**
 * Pushes the standard `generate_lead` conversion event to Google Tag Manager / GA4 dataLayer.
 * MUST only be invoked after receiving a successful 2xx HTTP response.
 */
export function pushGenerateLeadEvent(extraData?: Record<string, any>): void {
  if (typeof window === 'undefined') return;

  try {
    window.dataLayer = window.dataLayer || [];
    const eventData = {
      event: 'generate_lead',
      event_category: 'Lead Generation',
      event_label: 'Contact Form Submission',
      ...extraData,
    };

    window.dataLayer.push(eventData);
    console.log('[Tracking] dataLayer event pushed: generate_lead', eventData);
  } catch (err) {
    console.error('Failed to push generate_lead event to dataLayer:', err);
  }
}
