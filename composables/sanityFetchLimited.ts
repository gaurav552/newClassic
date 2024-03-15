export default async (query:string, errorMsg:string) => {

    const { data, error } = await useSanityQuery(query)

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage: errorMsg
        })
    }

    return {data}
}