export default async (query: string,searchKey:string, errorMsg:string) => {

    const { data, error } = await useSanityQuery(query, {search:searchKey})

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage: errorMsg
        })
    }

    return {data}
}