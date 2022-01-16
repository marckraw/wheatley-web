import type { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { projects } from '../../database-mock/projects'
import styles from '../../styles/projects.module.scss'

interface ProjectEntryProps {
    project: any
}

const ProjectEntry: NextPage<ProjectEntryProps> = (props) => {
    const { project } = props

    return (
        <Layout>
            {projects && (
                <div className={styles.container}>
                    <h2>{project.title}</h2>
                    <div className={styles.places}>
                        {project.places.map((place: any) => (
                            <div key={place.id}>
                                <h3>{place.name}</h3>
                                <ul>
                                    {place.links.map((link: any) => (
                                        <li key={link.url}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default ProjectEntry

export const getStaticPaths: GetStaticPaths = async () => {
    const listOfProjects = ['bystro', 'lisiewiczdesign', 'mrckdev', 'wheatley']
    const rootPath = '/projects/'

    const paths = listOfProjects.map((project) => rootPath + project)

    return {
        fallback: false,
        paths,
    }
}

export const getStaticProps: GetStaticProps<any, any> = async (context) => {
    const {
        params: { slug },
    } = context

    const project = projects.filter((project) => project.name === slug)[0]

    return {
        props: {
            project,
        },
    }
}
