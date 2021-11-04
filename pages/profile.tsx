import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Protected, Restaurant } from '../interfaces'
import { useMe } from '../hooks/useMe'
import { GetStaticProps } from 'next'
import { usei18n } from '../hooks/usei18n'
import { useMyRestaurants } from '../hooks/useMyRestaurants'

const Profile: NextPage & Protected = (props: any) => {
    const {
        context: { locale },
    } = props
    const t = usei18n(locale)
    // Fetch the user client-side
    const dataFromUseMe = useMe()
    const myRestaurants = useMyRestaurants()

    const { user, isLoading, isError } = dataFromUseMe
    const { restaurants } = myRestaurants

    if (isError) {
        return (
            <Layout>
                <div>
                    {isError.message} in {isError.info.path}
                </div>
                <br />
                <Link href="/login">{t('Login')}</Link>
            </Layout>
        )
    }

    // Server-render loading state
    if (!user || user.isLoggedIn === false) {
        return <Layout>{t('Loading...')}</Layout>
    }

    // Once the user request finishes, show the user
    return (
        <Layout>
            <div style={{ padding: '24px' }}>
                <h2>{t('My profile')}</h2>
                {user.name} {user.lastName}
                <h3>{t('My restaurants')}</h3>
                <ul>
                    {restaurants?.map((restaurant: Restaurant) => {
                        return <li key={restaurant.id}>{restaurant.name}</li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

Profile.auth = true

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: { context },
    }
}

export default Profile
