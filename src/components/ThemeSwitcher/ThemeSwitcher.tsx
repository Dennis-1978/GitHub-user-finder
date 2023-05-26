import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
    const [isDark, setDark] = useState(false);
    const themText = isDark ? 'Light' : 'Dark';
    const ThemIcon = isDark ? SunIcon : MoonIcon;

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <div className={styles.switcher} onClick={() => setDark(!isDark)}>
            <span>{themText}</span>
            <ThemIcon className={styles.icon} />
        </div>
    );
};
