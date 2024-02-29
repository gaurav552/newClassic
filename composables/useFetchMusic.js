import music from '@/data/music.json'

export default async () => {
    let musics = music.json_array
    return {musics};
}