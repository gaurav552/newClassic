export default async (searchKey:string, errorMsg:string) => {
    let query = groq`{
        "composers": *[_type == 'composers' && [firstName, lastName, excerpt] match $search] | order(firstName, dateOfBirth)
        {
            "name":firstName +" "+lastName,
            firstName,
            lastName,
            mainImage,
            excerpt,
            dateOfBirth,
            dateOfDeath,
            _id,
        },
        "compositions": *[_type == 'compositions' && [name, altName, compositionKey, description, movements, composerName->lastName, composerName->firstName] match $search ] | order(composerName.firstName, altName, name)
        {
            name,
            altName,
            "person":composerName->{mainImage, firstName, lastName},
            year,
            "len":length,
            _id,
        }
    }`
    const { data, error } = await useSanityQuery(query, {search:searchKey})

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage: errorMsg
        })
    }

    return {data}
}