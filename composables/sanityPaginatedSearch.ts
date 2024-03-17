export default async (query: string, searchKey:string, sort:object, sortDirection: string, errorMsg:string) => {

    if(sortDirection !== 'asc'){
        query = query.replaceAll('asc', 'desc')
    }

    const { data, error } = await useSanityQuery(query, {search:searchKey, sort1: sort.sort1, sort2: sort.sort2})

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage: errorMsg
        })
    }

    return {data}
}