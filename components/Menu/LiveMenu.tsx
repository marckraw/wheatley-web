import { pickMenu } from '../../utils/helper-functions'
import { useFullMenuOFRestaurant } from '../../hooks/useFullMenuOFRestaurant'
import { CategoriesWithItems } from './CategoriesWithItems'

const LiveMenu = (props: any) => {
    const { id } = props
    const {
        menu,
        isLoading: isMenuLoading,
        isError,
    } = useFullMenuOFRestaurant()

    return !isMenuLoading ? (
        <div>
            <h2>{pickMenu(id, menu).title}</h2>
            {menu &&
                pickMenu(id, menu)?.categoriesIds?.map((categoryId: any) => (
                    <CategoriesWithItems
                        key={categoryId}
                        id={categoryId}
                        menu={menu}
                    />
                ))}
        </div>
    ) : (
        <div>loading menu</div>
    )
}

export default LiveMenu
