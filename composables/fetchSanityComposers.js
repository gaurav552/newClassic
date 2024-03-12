export default async () => {

    let query = groq`*[_type == "composers"]{
        firstName,
        lastName,
        images,
        dateOfBirth,
        dateOfDeath,
        _id,
    }`
    const { data, error } = await useSanityQuery(query)

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage: 'Unable to fetch composers'
        })
    }

    return {data}
}