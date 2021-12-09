import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

const Profile: NextPage = (props: any) => {
    return <div>This is profile</div>
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: { context },
    }
}

export default Profile
