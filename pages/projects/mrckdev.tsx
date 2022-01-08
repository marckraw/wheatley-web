import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import React from 'react'

const MrckDev: NextPage = (props: any) => {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h2>mrck.dev places</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '48px',
                    }}
                >
                    <div>
                        <h3>Development process</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/marckraw/mrck.dev/issues"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Issues - mrck.dev
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Repositories</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/marckraw/mrck.dev"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    mrck.dev
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Urls</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://mrck.dev"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    https://mrck.dev
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Domain</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://ap.www.namecheap.com/domains/domaincontrolpanel/mrck.dev/domain"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Domain managment
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Deploy services</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://app.netlify.com/sites/mrck/overview"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Netlify: mrck.dev
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MrckDev
