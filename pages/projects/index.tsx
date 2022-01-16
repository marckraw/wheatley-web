import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import React from 'react'
import Link from 'next/link'

const ProjectsIndex: NextPage = (props: any) => {
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
                <h2>Programming projects</h2>
                <div>
                    <ul
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '48px',
                        }}
                    >
                        <li>
                            <Link href="/projects/lisiewiczdesign">
                                <a>lisiewicz.design</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects/bystro">
                                <a>bystro</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects/mrckdev">
                                <a>mrck.dev</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects/wheatley">
                                <a>wheatley.one</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsIndex
