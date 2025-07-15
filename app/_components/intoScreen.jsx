import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideSplash } from '../store/splashSlice';
import styles from './IntroScreen.module.css';
import Image from 'next/image';
import Logo from "@/public/logo-01.png"

const IntroScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(hideSplash());
        }, 3000); // Show splash for 3 seconds
        return () => clearTimeout(timer);
    }, [dispatch]);

    return (
        <div className={styles.intro}>
            <Image src={Logo} alt='logo' />
            <p>Loading...</p>
        </div>
    );
};

export default IntroScreen;
