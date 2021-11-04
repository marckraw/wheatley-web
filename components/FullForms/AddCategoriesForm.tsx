import React, { FC } from 'react'
import omit from 'lodash/omit'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { postAuthFetcher, postFetcher } from '../../utils/fetcher'
import { useSession } from 'next-auth/react'
import { Endpoints } from '../../const/endpoints'
import { useMyRestaurants } from '../../hooks/useMyRestaurants'
import { Restaurant } from '../../interfaces'
import styles from './forms.module.scss'
import Select from 'react-select'
import { useFullMenuOFRestaurant } from '../../hooks/useFullMenuOFRestaurant'
import { SubmitButton } from '../Forms/Button'

type Inputs = {
    title: string
    restaurantId: number
    itemsIds: {
        value: number
        label: string
    }
}

interface AddCategoriesFormProps {}

export const AddCategoriesForm: FC<AddCategoriesFormProps> = () => {
    const {
        menu,
        isLoading: isMenuLoading,
        isError: isMenuError,
    } = useFullMenuOFRestaurant()
    const { restaurants, isError, isLoading } = useMyRestaurants()
    const { data: session } = useSession()
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data: unknown) => {
        console.log('This is data for submit: ')
        console.log(data)
        // const preparedData = Endpoints.auth.menu.createCategory({
        //     restaurantId: data.restaurantId,
        //     body: {
        //         title: data.title,
        //         itemIds: []
        //     }
        // })

        // postAuthFetcher(preparedData.url, session.token, preparedData.body)
        //     .then(response => {
        //         console.log("wtf ?")
        //         console.log(response)
        //         toast(`Added! ${response}`)
        //     })
        //     .catch(error => {
        //         console.log("error happenend")
        //         console.log(error)
        //         toast.error(error.message)
        //     })
    }

    console.log(errors)

    return (
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
                <label htmlFor="restaurant-select">Choose Restaurant:</label>
                <Controller
                    control={control}
                    name="restaurantId"
                    render={(hookForm) => {
                        return (
                            <Select
                                onChange={hookForm.field.onChange}
                                isMulti
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
            <div className={styles.input}>
                <label htmlFor="items-select">Choose category items:</label>
                <Controller
                    control={control}
                    name="itemsIds"
                    render={(hookForm) => {
                        console.log(hookForm)
                        return (
                            <Select
                                onChange={hookForm.field.onChange}
                                isMulti
                                id="items-select"
                                options={
                                    menu &&
                                    menu.items &&
                                    Object.entries(menu.items).map(
                                        ([id, item]) => {
                                            return {
                                                // @ts-ignore Object is of typ unknown
                                                value: item.id,
                                                // @ts-ignore Object is of typ unknown
                                                label: item.title,
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
    )
}
