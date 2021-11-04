import type {NextPage} from "next";
import Layout from "../../components/Layout";
import {Protected} from "../../interfaces";
import {GetStaticProps} from "next";
import {usei18n} from "../../hooks/usei18n";
import ManageLayout from "../../components/Layout/ManageLayout";
import MenusListing from "../../components/Menu/MenuListing";
import {useFullMenuOFRestaurant} from "../../hooks/useFullMenuOFRestaurant";
import {Modal} from "../../components/Modal";
import {useState} from "react";
import {AddMenuForm} from "../../components/FullForms/AddMenuForm";
import styles from "../../styles/categoriesPage.module.scss";
import {Button} from "../../components/Forms/Button";

const Menus: NextPage & Protected = (props: any) => {
    const {context: {locale}} = props;
    const {menu, isLoading: isMenuLoading, isError} = useFullMenuOFRestaurant()
    const [modalIsOpen, setIsOpen] = useState(false);
    const t = usei18n(locale)

    const handleClick = () => {
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
                    <h2>Menus</h2>
                    <Button onClick={handleClick}>{t("Add")}</Button>
                </div>
                {
                    !isMenuLoading && (
                        <>
                            <MenusListing items={menu?.menus} />
                            <div>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    contentLabel="Example Modal"
                                >
                                    <AddMenuForm restaurantId={6} />
                                </Modal>
                            </div>
                        </>
                    )
                }
            </ManageLayout>
        </Layout>
    )
}

Menus.auth = true

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {context},
    };
};

export default Menus