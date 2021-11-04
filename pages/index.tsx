import type {GetStaticProps, NextPage} from 'next'
import {signOut, useSession} from "next-auth/react";
import Unauthenticated from "../components/Auth/Unauthenticated";
import Layout from "../components/Layout";
import {Protected} from "../interfaces";
import React from "react";
import {usei18n} from "../hooks/usei18n";

const Home: NextPage & Protected = (props: any) => {
    const {context: {locale}} = props;
    const t = usei18n(locale)
    const {data: session, status}: any = useSession()

    if (status === 'loading') {
        return (
            <Layout>
                <h2>{t("Loading")}</h2>
            </Layout>
        )
    }

    if (status === 'authenticated' && session) {
        return (
            <Layout>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    <h2>{t("Welcome to Bystro!")}</h2>
                </div>
            </Layout>
        )
    }

    if (status === 'unauthenticated') {
        return (
            <Layout>
                <Unauthenticated/>
            </Layout>
        )
    }

    return (
        <Layout>{t("empty")}</Layout>
    )
}

Home.auth = true

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {context},
    };
};

export default Home
