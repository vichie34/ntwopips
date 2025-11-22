import { useEffect } from 'react';

// Adds or removes the `dark` class on documentElement based on system preference
export default function useSystemTheme() {
    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;

        const mql = window.matchMedia('(prefers-color-scheme: dark)');

        const apply = (ev?: MediaQueryListEvent | MediaQueryList) => {
            const matches = 'matches' in (ev || mql) ? (ev as any).matches : mql.matches;
            if (matches) document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
        };

        // initial
        apply();

        // listen
        try {
            // modern
            mql.addEventListener('change', apply as any);
        } catch (e) {
            // safari
            mql.addListener(apply as any);
        }

        return () => {
            try {
                mql.removeEventListener('change', apply as any);
            } catch (e) {
                mql.removeListener(apply as any);
            }
        };
    }, []);
}
