import {useState} from "#app";

export const pageHeadline = () => useState('headline', () => '')
export const pageSubHeadline = () => useState('subHeadline', () => '')
export const pageBackRoute = () => useState('back-route', () => '')
export const pageIcon = () => useState('page-Icon', () => '')
export const pageBreadCrumbs = () => useState('page-crumbs', () => [])
export const composerFields = () => useState('composer-fields', () =>
    'firstName, lastName, mainImage, dateOfBirth, dateOfDeath, _id'
)

export const composerEditorPickQuery = () => useState('composer-editor-pick', () =>
    groq`*[_type == "composers" && editorPick == true]{
        "name":firstName +" "+lastName,
        mainImage,
        excerpt,
        dateOfBirth,
        dateOfDeath,
        _id,
    }`
)

export const musicEditorPicksQuery = () => useState('music-editor-pick', () =>
    groq`{
        "composers":*[_type == "composers" && editorPick == true]{
            "name":firstName +" "+lastName,
            mainImage,
            excerpt,
            dateOfBirth,
            dateOfDeath,
            _id,
        },
        "compositions":*[_type == "compositions" && editorPick == true]{
            name,
            altName,
            "person":composerName->{mainImage, firstName, lastName},
            year,
            "len":length,
            _id,
        }
    }
    `
)

export const musicFeaturedQuery = () => useState('music-editor-pick', () =>
    groq`{
        "composers":*[_type == "composers" && editorPick == false && featured == true]{
            "name":firstName +" "+lastName,
            mainImage,
            excerpt,
            dateOfBirth,
            dateOfDeath,
            _id,
        },
        "compositions":*[_type == "compositions" editorPick == false && featured == true]{
            name,
            altName,
            "person":composerName->{mainImage, firstName, lastName},
            year,
            "len":length,
            _id,
        }
    }
    `
)

export const musicSearchQuery = () => useState('music-search-query', () =>
    groq`{
        "composers": *[_type == 'composers' && [firstName, lastName, excerpt] match $search] | order($sort1 asc)
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
        "compositions": *[_type == 'compositions' && [name, altName, compositionKey, description, movements, composerName->lastName, composerName->firstName] match $search ] | order($sort2 asc, itemNumber asc)
        {
            name,
            altName,
            "person":composerName->{mainImage, firstName, lastName},
            year,
            "len":length,
            _id,
        }
    }`
)

export const composerSearchQuery = () => useState('composer-search-query', () =>
    groq`*[_type == 'composers' && [firstName, lastName, excerpt] match $search] | order($sort1 asc)
    {
        "name":firstName +" "+lastName,
        firstName,
        lastName,
        mainImage,
        excerpt,
        dateOfBirth,
        dateOfDeath,
        _id
    }`
)

export const composerFeaturedQuery = () => useState('composer-editor-pick', () =>
    groq`*[_type == "composers" && featured == true]{
        "name":firstName +" "+lastName,
        firstName,
        lastName,
        mainImage,
        excerpt,
        dateOfBirth,
        dateOfDeath,
        _id,
    }`
)

export const compositionEditorPickQuery = () => useState('composition-editor-pick', () =>
    groq`*[_type == "compositions" && editorPick == true]{
        name,
        altName,
        "person":composerName->{mainImage, firstName, lastName},
        year,
        "len":length,
        _id,
    }`
)

export const compositionFeaturedQuery = () => useState('composition-editor-pick', () =>
    groq`*[_type == "compositions" && editorPick == false && featured == true]{
        name,
        altName,
        "person":composerName->{mainImage, firstName, lastName},
        year,
        "len":length,
        _id,
    }`
)

export const searchSortMusic= () => useState('music-sort', () => [
    {
        name: 'Name',
        value: 'name'
    },
    {
        name: 'Date',
        value: 'date'
    }
])
