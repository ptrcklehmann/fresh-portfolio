import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import ProjectItem from '../components/project-item'
import { getAllPostsForHome } from '../lib/api'
import styles from '../styles/works.module.css'

export default function Works({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  console.log(heroPost)
  return (
    <Layout>
      <Head>
        <title>Works</title>
      </Head>
      <Container>
        <div className='pt-40 max-w-7xl'>
          <ul className={styles.gridWrapper}>
            {allPosts && allPosts.map(post => (<ProjectItem post={post} key={post.title}/>))}
          </ul>
        </div>
      </Container>
    </Layout>
  )
}
export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
