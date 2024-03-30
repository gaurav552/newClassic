export default async (id) => {
    let query = groq`*[_type == "composers" && _id == $composerID]{
      bio,
      firstName,
      lastName,
      mainImage,
      dateOfBirth,
      dateOfDeath,
      _id,
      excerpt,
      images,
      numberOfCompositions,
      timeline,
      "comp": *[_type == "compositions" && itemNumber == 1 && references(^._id)] | order(genre asc).genre
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