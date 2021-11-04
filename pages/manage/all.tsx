import type {NextPage} from "next";
import Layout from "../../components/Layout";
import {Protected} from "../../interfaces";
import {GetStaticProps} from "next";
import {usei18n} from "../../hooks/usei18n";
import ManageLayout from "../../components/Layout/ManageLayout";
import {CreateItemForm} from "../../components/SampleForm";
import SelectedMenu from "../../components/Menu/SelectedMenu";
import {useFullMenuOFRestaurant} from "../../hooks/useFullMenuOFRestaurant";
import CategoriesListing from "../../components/Menu/CategoriesListing";
import {Accordion} from "../../components/Collapsible/Accordion";
import MenusListing from "../../components/Menu/MenuListing";
import ItemsListing from "../../components/Menu/ItemsListing";

const All: NextPage & Protected = (props: any) => {
    const {context: {locale}} = props;
    const {menu, isLoading: isMenuLoading, isError} = useFullMenuOFRestaurant()
    const t = usei18n(locale)

    return (
        <Layout>
            <ManageLayout>
                <h2>All</h2>
                {
                    !isMenuLoading && (
                        <>
                            <Accordion headerExpanded={<h3>Hide Categories</h3>} headerNotExpanded={<h3>Show Categories</h3>}>
                                <CategoriesListing items={menu?.categories} />
                            </Accordion>
                            <Accordion headerExpanded={<h3>Hide Menus</h3>} headerNotExpanded={<h3>Show Menus</h3>}>
                                <MenusListing items={menu?.menus} />
                            </Accordion>
                            <Accordion headerExpanded={<h3>Hide Items</h3>} headerNotExpanded={<h3>Show Items</h3>}>
                                <ItemsListing items={menu?.items} />
                            </Accordion>
                        </>
                    )
                }
            </ManageLayout>
        </Layout>
    )
}

All.auth = true

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {context},
    };
};

export default All