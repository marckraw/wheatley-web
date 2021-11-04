import {useState} from "react";
import type {NextPage} from "next";
import {GetStaticProps} from "next";
import Layout from "../../components/Layout";
import {Protected} from "../../interfaces";
import {usei18n} from "../../hooks/usei18n";
import ManageLayout from "../../components/Layout/ManageLayout";
import {useFullMenuOFRestaurant} from "../../hooks/useFullMenuOFRestaurant";
import CategoriesListing from "../../components/Menu/CategoriesListing";
import {Modal} from "../../components/Modal";
import {AddCategoriesForm} from "../../components/FullForms/AddCategoriesForm";
import {Button} from "../../components/Forms/Button";
import styles from '../../styles/categoriesPage.module.scss';

const Categories: NextPage & Protected = (props: any) => {
    const {context: {locale}} = props;
    const {menu, isLoading: isMenuLoading, isError} = useFullMenuOFRestaurant()
    const [modalIsOpen, setIsOpen] = useState(false);
    const t = usei18n(locale)

    const handleClick = () => {
        console.log("handle clicking")
        openModal()
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        console.log("after open modal")
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Layout>
            <ManageLayout>
                <div className={styles.displayFlexSpaceBetween}>
                    <h2>Categories</h2>
                    <Button onClick={handleClick}>{t("Add")}</Button>
                </div>
                {
                    !isMenuLoading && (
                        <>
                            <CategoriesListing items={menu?.categories} />
                            <div>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    contentLabel="Example Modal"
                                >
                                    <AddCategoriesForm />
                                </Modal>
                            </div>
                        </>
                    )
                }
            </ManageLayout>
        </Layout>
    )
}

Categories.auth = true

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {context},
    };
};

export default Categories