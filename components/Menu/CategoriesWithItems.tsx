import styles from './live-menu.module.scss'
import { pickCategory, pickItemsByCategory } from '../../utils/helper-functions'
import tableStyles from './table.module.scss'
import { Button } from '../Forms/Button'
import { FC, useState } from 'react'
import { GetFullMenuOfRestaurantsTransformed } from '../../interfaces/menu'
import { useTranslationWithRouterLocale } from '../../hooks/useTranslation'
import { AddItemsForm } from '../FullForms/AddItemForm'
import { Modal } from '../Modal'

interface CategoriesWithItemsProps {
    id: number
    menu: GetFullMenuOfRestaurantsTransformed
}

export const CategoriesWithItems: FC<CategoriesWithItemsProps> = (props) => {
    const { id, menu } = props
    const t = useTranslationWithRouterLocale()
    const [modalIsOpen, setIsOpen] = useState(false)

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
        <div className={styles.categoriesWrapper}>
            <h3>{pickCategory(id, menu)?.title}</h3>
            <table className={tableStyles.tableContainer}>
                <tbody>
                    {pickItemsByCategory(id, menu).map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.priceInfo}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>
                            <Button small onClick={handleClick}>
                                {t('Add')}
                            </Button>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <AddItemsForm categoryId={id} restaurantId={18} />
            </Modal>
        </div>
    )
}
