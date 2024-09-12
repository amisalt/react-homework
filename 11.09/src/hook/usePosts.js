import { useMemo } from "react"

export const useSortedPosts = (posts, sort) =>{
    return useMemo(()=>{
        if(sort !== 'none'){
            return posts.sort((a,b)=>{
            return a[sort].localeCompare(b[sort])
        })}
        else{
            return posts
        }
    }, [sort,posts])
}
export const usePosts = (posts, sort, search)=>{
    const sortedPosts = useSortedPosts(posts, sort)
    return useMemo(()=>{
        if(search.trim() !== ''){        
            return sortedPosts.filter(post=> post.title.toLowerCase().includes(search.toLowerCase()))}
        else return posts
    }, [posts, sort, search])
}