import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GoogleAnalytics = () => {
    const router = useRouter();

    useEffect(() => {
        const initGtag = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-D1RJEC3K5D'); // Replace with your Measurement ID
        };

        // Check if gtag is already defined
        const gtag = window.gtag;
        if (!gtag) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=G-D1RJEC3K5D`; // Replace with your Measurement ID
            script.onload = initGtag;
            document.head.appendChild(script);
        } else {
            initGtag();
        }

        // Track page views on route change
        const handleRouteChange = () => {
            if (typeof gtag === 'function') { // Check if gtag is a function
                gtag('config', 'G-D1RJEC3K5D', {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_path: router.pathname,
                });
            } else {
                console.warn('gtag function is not defined yet.');
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return null;
};

export default GoogleAnalytics;
