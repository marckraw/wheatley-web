import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'
import React from 'react'

const Home: NextPage = (props: any) => {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h2>Welcome to wheatley</h2>
            </div>
        </Layout>
    )
}

export default Home
