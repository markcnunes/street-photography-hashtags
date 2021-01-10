import GA4React from 'ga-4-react';
import { GA4ReactResolveInterface } from 'ga-4-react/dist/lib/gtagModels';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cookieConsent, gaCode, getCookie } from 'utils/cookies';

const usePageTracking = () => {
  const location = useLocation();
  // Initialize
  useEffect(() => {
    if (
      !window.location.href.includes('localhost') &&
      getCookie(cookieConsent) === 'true'
    ) {
      switch (GA4React.isInitialized()) {
        case true:
          const ga4 = GA4React.getGA4React();
          if (ga4) {
            // reference: ga4.pageview(path, location, title);
            ga4.pageview(location.pathname);
          }
          break;
        default:
        case false:
          const ga4react = new GA4React(gaCode);
          ga4react.initialize().then(
            (ga4: GA4ReactResolveInterface) => {
              ga4.pageview(location.pathname);
            },
            (err: Error) => {
              console.error(err);
            },
          );
          break;
      }
    }
  }, [location]);
};

export default usePageTracking;
