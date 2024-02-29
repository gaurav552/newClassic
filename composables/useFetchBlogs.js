import jsonBlogs from '@/data/blogs.json'

export default async () => {
    let blogs = jsonBlogs.json_array
    return {blogs};
}