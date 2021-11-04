import {pickCategory, pickItem, pickMenu} from "../../utils/helper-functions";
import { dupa } from './transformations'

const SelectedMenu = (props: any) => {
    const {menu, id} = props

    const renderModifiers = (modifiersIds: any) => {
        return modifiersIds?.map((modifierId: any) => {
            return (
                <ul key={modifierId}>
                    <li>
                        {pickCategory(modifierId, menu)?.title}
                        {
                            pickCategory(modifierId, menu)?.itemsIds.map((itemId: any) => {
                                return (
                                    <ul key={itemId}>
                                        <li>{pickItem(itemId, menu)?.title}</li>
                                        {
                                            renderModifiers(pickItem(itemId, menu).modifiersIds)
                                        }
                                    </ul>
                                )
                            })
                        }
                    </li>
                </ul>
            )
        })
    }


    return (
        <div>
            <h2>{pickMenu(id, menu).title}</h2>
            {
                menu && pickMenu(id, menu).categoriesIds.map((categoryId: any) => {
                    return (
                        <ul key={categoryId}>
                            <li>
                                {pickCategory(categoryId, menu)?.title}
                                {
                                    pickCategory(categoryId, menu)?.itemsIds.map((itemId: any) => {
                                        return (
                                            <ul key={itemId}>
                                                <li>
                                                    {pickItem(itemId, menu)?.title}
                                                    {
                                                        renderModifiers(pickItem(itemId, menu).modifiersIds)
                                                    }
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default SelectedMenu