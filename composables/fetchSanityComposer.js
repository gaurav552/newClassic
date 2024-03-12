export default async (id) => {
    let query = groq`*[_type == "composers" && _id == $composerID]{
      ...,
        "comp": listOfCompositions[]->{
        name,
        altName,
        compositionKey,
        year,
        score,
        instrument,
        genre,
        itemNumber
      } | order(instrument, genre, itemNumber)
    }`
    const { data, error } = await useSanityQuery(query, { composerID: id })

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage: 'Unable to fetch composers'
        })
    }

    return {data}
}