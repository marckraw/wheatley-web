import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import React from 'react'

const BystroFlutter: NextPage = (props: any) => {
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
                <h2>Bystro Flutter places</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '48px',
                    }}
                >
                    <div>
                        <h3>Development process</h3>
                        <p>???</p>
                    </div>
                    <div>
                        <h3>Repositories</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/marckraw/bystro-flutter"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Flutter bystro repo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Urls</h3>
                        <p>???</p>
                    </div>
                    <div>
                        <h3>Domain</h3>
                        <p>???</p>
                    </div>
                    <div>
                        <h3>Deploy services</h3>
                        <p>???</p>
                    </div>
                    <div>
                        <h3>Content (CMS, Database)</h3>
                        <p>???</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BystroFlutter
