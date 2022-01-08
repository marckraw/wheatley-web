import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import React from 'react'

const Wheatley: NextPage = (props: any) => {
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
                        <ul>
                            <li>
                                <a
                                    href="https://codepride.atlassian.net/jira/software/projects/WHEAT/boards/3"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Jira - Wheatley
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Repositories</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/marckraw/wheatley-web"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    whatley-web
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/marckraw/wheatley-api"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    whatley-api
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/marckraw/wheatley-native"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    whatley-native
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/marckraw/wheatley-native-expo"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    whatley-expo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Urls</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://api.wheatley.one/v1"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Wheatley V1 api
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wheatley.one"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Wheatley WEB
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Domain</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://ap.www.namecheap.com/domains/domaincontrolpanel/wheatley.one/domain"
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
                                    href="https://app.netlify.com/sites/wheatley/overview"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Netlify: wheatley.one
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://cloud.digitalocean.com/apps/0bdeb30a-0067-4eb1-93f4-422b31aef288/overview"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    DigitalOcean: api.wheatley.one
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Content (CMS, Database)</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://cloud.digitalocean.com/apps/0bdeb30a-0067-4eb1-93f4-422b31aef288/settings/db?i=3c8ad0"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Database (DigitalOcean): wheatley-api db
                                    component
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Wheatley
