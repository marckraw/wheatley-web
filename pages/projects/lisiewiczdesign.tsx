import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import React from 'react'

const LisiewiczDesign: NextPage = (props: any) => {
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
                <h2>Wheatley places</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '48px',
                    }}
                >
                    <div>
                        <h3>Development process</h3>
                        <h4>Jira - should be create</h4>
                    </div>
                    <div>
                        <h3>Repositories</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/marckraw/lisiewicz"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    lisiewicz.design
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Urls</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://lisiewicz.design/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    lisiewicz.design
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Domain</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://ap.www.namecheap.com/domains/domaincontrolpanel/lisiewicz.design/domain"
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
                                    href="https://app.netlify.com/sites/lisiewicz/overview"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Netlify: lisiewicz.design
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Content (CMS, Database)</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://app.storyblok.com/#!/me/spaces/77258/dashboard"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Storyblok: lisiewicz.design
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LisiewiczDesign
