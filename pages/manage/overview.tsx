import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import { Protected } from '../../interfaces'
import { GetStaticProps } from 'next'
import ManageLayout from '../../components/Layout/ManageLayout'
import LiveMenu from '../../components/Menu/LiveMenu'

const Overview: NextPage & Protected = (props: any) => {
    return (
        <Layout>
            <ManageLayout>
                <LiveMenu id={18} />
                <LiveMenu id={22} />
            </ManageLayout>
        </Layout>
    )
}

Overview.auth = true

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: { context },
    }
}

export default Overview
