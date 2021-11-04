import React, { FC } from 'react'
import omit from 'lodash/omit'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { postAuthFetcher, postFetcher } from '../../utils/fetcher'
import { useSession } from 'next-auth/react'
import { Endpoints } from '../../const/endpoints'
import { useMyRestaurants } from '../../hooks/useMyRestaurants'
import { Restaurant } from '../../interfaces'
import { useFullMenuOFRestaurant } from '../../hooks/useFullMenuOFRestaurant'
import styles from './forms.module.scss'
import { SubmitButton } from '../Forms/Button'
import { pickCategory } from '../../utils/helper-functions'
import Select from 'react-select'

type Inputs = {
    title: string
    restaurantId: {
        value: number
        label: string
    }
    categoryId: number
}

interface AddMenusFormProps {
    restaurantId: number
}

export const AddMenuForm: FC<AddMenusFormProps> = (props) => {
    const { restaurantId } = props
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
    } = useForm<Inputs>()

    const categoriesSelect =
        menu &&
        menu.categories &&
        Object.entries(menu.categories).map(([id, category]) => {
            // @ts-ignore Object is of typ unknown
            return { value: id, label: category.title }
        })

    const onSubmit: SubmitHandler<Inputs> = (data: unknown) => {
        const preparedData = Endpoints.auth.menu.createMenu({
            // @ts-ignore Object is of typ unknown
            restaurantId: data.restaurantId.value,
            body: {
                // @ts-ignore Object is of typ unknown
                title: data.title,
                // @ts-ignore Object is of typ unknown
                categoriesIds: data.categoryId.map((category) =>
                    Number(category.value)
                ),
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

    console.log(errors)

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
                <label htmlFor="category-select">Choose category:</label>
                <Controller
                    control={control}
                    name="categoryId"
                    render={(hookForm) => {
                        return (
                            <Select
                                isMulti
                                onChange={hookForm.field.onChange}
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
                        label: restaurants.find(
                            // @ts-ignore Object is of typ unknown
                            (restaurant) => restaurant.id === restaurantId
                        ).name,
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
                                            // @ts-ignore Object is of typ unknown
                                            (restaurant) =>
                                                restaurant.id === restaurantId
                                        ).name,
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
        <div>Loading form...</div>
    )
}
