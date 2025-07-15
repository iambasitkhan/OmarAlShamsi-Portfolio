// components/SplashScreen.js
import Image from 'next/image';
import styles from './SplashScreen.module.css'; // Or use Tailwind/etc.
import Logo from "@/public/logo-01.png"

const SplashScreen = () => {
    return (
        <div className={styles.splash}>
            <div className='w-1/4'>
                <Image src={Logo} alt='logo' />
            </div>
            <p className={styles.subtitle}>Loading your experience...</p>
        </div>
    );
};

export default SplashScreen;
