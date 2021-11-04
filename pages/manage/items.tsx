import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import { Protected } from '../../interfaces'
import { GetStaticProps } from 'next'
import { usei18n } from '../../hooks/usei18n'
import ManageLayout from '../../components/Layout/ManageLayout'
import { useFullMenuOFRestaurant } from '../../hooks/useFullMenuOFRestaurant'
import ItemsListing from '../../components/Menu/ItemsListing'
import { Modal } from '../../components/Modal'
import { useState } from 'react'
import { AddItemsForm } from '../../components/FullForms/AddItemForm'
import styles from '../../styles/categoriesPage.module.scss'
import { Button } from '../../components/Forms/Button'

const Items: NextPage & Protected = (props: any) => {
    const {
        context: { locale },
    } = props
    const {
        menu,
        isLoading: isMenuLoading,
        isError,
    } = useFullMenuOFRestaurant()
    const [modalIsOpen, setIsOpen] = useState(false)
    const t = usei18n(locale)

    const handleClick = () => {
        openModal()
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        console.log('after open modal')
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Layout>
            <ManageLayout>
                <div className={styles.displayFlexSpaceBetween}>
                    <h2>Items</h2>
                    <Button onClick={handleClick}>{t('Add')}</Button>
                </div>
                {!isMenuLoading && (
                    <>
                        <ItemsListing items={menu?.items} />
                        <div>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                            >
                                <div>Random information for now</div>
                            </Modal>
                        </div>
                    </>
                )}
            </ManageLayout>
        </Layout>
    )
}

Items.auth = true

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: { context },
    }
}

export default Items
