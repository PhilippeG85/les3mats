import styles from '@/styles/navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles['appart-logo']}>
                    {/* les trois mats et choix d'appart */}
                </div>
                <div className={styles['navbar-items']}>
                    {/* lien vers activites... */}
                </div>
                <div className={styles['language-box']}>
                    {/* absolute fr/en */}
                    <div>
                        <Link href="/fr">Fr</Link>
                    </div>
                    <div>
                        <Link href='/en'>En</Link>
                    </div>
                </div>
            </div>
        </>
    )
}