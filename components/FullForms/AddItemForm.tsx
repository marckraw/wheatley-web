import React, { FC } from 'react'
import omit from 'lodash/omit'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { postAuthFetcher, postFetcher } from '../../utils/fetcher'
import { useSession } from 'next-auth/react'
import { Endpoints } from '../../const/endpoints'
import { useMyRestaurants } from '../../hooks/useMyRestaurants'
import { GetMenuCategoryResponse, Restaurant } from '../../interfaces'
import { useFullMenuOFRestaurant } from '../../hooks/useFullMenuOFRestaurant'
import Select from 'react-select'
import styles from './forms.module.scss'
import { SubmitButton } from '../Forms/Button'
import { pickCategory } from '../../utils/helper-functions'

type Inputs = {
    title: string
    description: string
    priceInfo: number
    suspended: boolean
    categoryId: {
        value: number
        label: string
    }
    restaurantId: {
        value: number
        label: string
    }
}

interface AddItemsFormProps {
    categoryId: number
    restaurantId: number
}

export const AddItemsForm: FC<AddItemsFormProps> = (props) => {
    const { categoryId, restaurantId } = props
    const {
        restaurants,
        isError,
        isLoading: isRestaurantLoading,
    } = useMyRestaurants()

    const {
        menu,
        isLoading: isMenuLoading,
        isError: isMenuError,
    } = useFullMenuOFRestaurant()
    const { data: session } = useSession()
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    })

    const categoriesSelect =
        menu &&
        menu.categories &&
        Object.entries(menu.categories).map(([id, category]) => {
            // @ts-ignore Object is of typ unknown
            return { value: id, label: category.title }
        })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const preparedData = Endpoints.auth.menu.createItem({
            restaurantId: data.restaurantId.value,
            body: {
                title: data.title,
                description: data.description,
                priceInfo: data.priceInfo,
                suspended: false,
                categoryId: data.categoryId.value,
            },
        })

        if (session) {
            postAuthFetcher(preparedData.url, session.token, preparedData.body)
                // @ts-ignore Object is of typ unknown
                .then((response) => {
                    console.log('wtf ?')
                    console.log(response)
                    toast(`Added! ${response}`)
                })
                // @ts-ignore Object is of typ unknown
                .catch((error) => {
                    console.log('error happenend')
                    console.log(error)
                    toast.error(error.message)
                })
        }
    }

    return !isMenuLoading && !isRestaurantLoading ? (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
                <label htmlFor="title">Title: </label>
                <input
                    id="title"
                    type="text"
                    defaultValue="title"
                    {...register('title', {
                        required: 'This is required',
                    })}
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div className={styles.input}>
                <label htmlFor="description">Description: </label>
                <textarea
                    id="description"
                    defaultValue="description"
                    {...register('description', {
                        required: 'This is required',
                    })}
                />
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div className={styles.input}>
                <label htmlFor="priceInfo">priceInfo: </label>
                <input
                    id="priceInfo"
                    type="number"
                    defaultValue="0"
                    {...register('priceInfo', {
                        required: 'This is required',
                    })}
                />
                {errors.priceInfo && <p>{errors.priceInfo.message}</p>}
            </div>

            <div className={styles.input}>
                <label htmlFor="category-select">Choose category:</label>
                <Controller
                    defaultValue={{
                        value: categoryId,
                        label: pickCategory(categoryId, menu).title,
                    }}
                    control={control}
                    name="categoryId"
                    render={(hookForm) => {
                        return (
                            <Select
                                onChange={hookForm.field.onChange}
                                defaultValue={[
                                    {
                                        value: categoryId,
                                        label: pickCategory(categoryId, menu)
                                            .title,
                                    },
                                ]}
                                id="category-select"
                                options={categoriesSelect}
                            />
                        )
                    }}
                />
            </div>

            <div className={styles.input}>
                <label htmlFor="restaurant-select">Choose restaurant:</label>
                <Controller
                    defaultValue={{
                        value: restaurantId,
                        label:
                            restaurants &&
                            restaurants.find(
                                (restaurant: Restaurant) =>
                                    restaurant.id === restaurantId
                            )?.name,
                    }}
                    control={control}
                    name="restaurantId"
                    render={(hookForm) => {
                        return (
                            <Select
                                defaultValue={[
                                    {
                                        value: restaurantId,
                                        label: restaurants.find(
                                            (restaurant: Restaurant) =>
                                                restaurant.id === restaurantId
                                        )?.name,
                                    },
                                ]}
                                onChange={hookForm.field.onChange}
                                id="restaurant-select"
                                options={
                                    restaurants &&
                                    restaurants.map(
                                        (restaurant: Restaurant) => {
                                            return {
                                                value: restaurant.id,
                                                label: restaurant.name,
                                            }
                                        }
                                    )
                                }
                            />
                        )
                    }}
                />
            </div>

            <div className={styles.submitButton}>
                <SubmitButton value="Add" />
            </div>
        </form>
    ) : (
        <div>Loading...</div>
    )
}
