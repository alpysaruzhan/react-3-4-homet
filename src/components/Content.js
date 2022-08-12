import { posts } from "../shared/prData"
import { BlogCard } from "./Card"
import React, { Component } from 'react';

console.log(new Component());

export class BlogContent extends React.Component {
    
    state = {
        showBLock: true,
        blogArr: JSON.parse( localStorage.getItem('blogPosts')) || posts
    }

    likePost = pos =>{
        const temp = [...this.state.blogArr];
        temp[pos].liked = !temp[pos].liked;

        this.setState({
            blogArr: temp
        })

        localStorage.setItem('blogPosts', JSON.stringify(temp))
    }
    

      deletePost = pos => {
        const temp = [...this.state.blogArr];
        temp.splice(pos, 1)

        this.setState({
            blogArr: temp
        })
      }

   render(){

    const myPosts = this.state.blogArr.map((item, pos) =>{
        return(
            <BlogCard 
            title={item.title}
            text= {item.text}
            date = {item.date}
            key={item.id}
            liked={item.liked}
            likePost = {() => this.likePost(pos)}
            deletePost = {() => this.deletePost(pos)}
            />
        )
      })
    return (
        <>
                <h2>MyTwitterBlog</h2>
                <div className="p">
                 {myPosts}
                </div>
        </>
    )
   }
}