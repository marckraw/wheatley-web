import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import React from 'react'

const Bystro: NextPage = (props: any) => {
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
                <h2>Bystro places</h2>
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
                                    href="https://bystro.atlassian.net/jira/software/projects/BS/boards/2"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Jira - Bystro
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Repositories</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/makowscy/Bystro-Web"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Bystro-web
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/makowscy/Bystro-Backend"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Bystro-Backend
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/makowscy/Bystro-Frontend"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Bystro-Frontend
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/makowscy/Bystro-TestTool"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Bystro-TestTool
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Urls</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://bystro.ch/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    bystro.ch
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Domain</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://ap.www.namecheap.com/domains/domaincontrolpanel/bystro.ch/domain"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Domain managment - bystro.ch
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Deploy services</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://app.netlify.com/sites/bystro/overview"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Netlify: bystro.ch
                                </a>
                            </li>
                            <li>OVH vps</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Content (CMS, Database)</h3>
                        <ul>
                            <li>Database (DigitalOcean): OVH db in docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Bystro
