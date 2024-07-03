import {useForm} from "react-hook-form";

export const TestForm = () => {

    const onSubmit = (data) => {
        console.log(data)
        alert(JSON.stringify(data))
    }

    const {register, handleSubmit, formState: {errors}} = useForm()
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="firstName" required
                {...register("firstName", {required: true})} />
            {errors.firstName && <p>First name is required.</p>}
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="lastName" required
                {...register("lastName", {required: true})} />
            {errors.lastName && <p>Last name is required.</p>}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit">Submit
            </button>
        </form>
    )
}