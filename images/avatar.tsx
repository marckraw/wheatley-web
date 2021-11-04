import Image from 'next/image'
import styles from './images.module.scss'
import avatar from '../public/avatar.png'

export const Avatar = () => {
    return (
        <div className={styles.img}>
            <Image
                src={avatar}
                alt="User Avatar"
                height={50}
                width={50}
            />
        </div>
    )
}
