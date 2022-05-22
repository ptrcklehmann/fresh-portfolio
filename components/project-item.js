import React from 'react'
import styles from '../styles/works.module.css'
import CoverImage from './cover-image'

export default function ProjectItem({post}) {
  console.log(post)
  return (
    <li className={styles.gridItem}>
      <div
        className={styles.projectLink}
        data-destination='https://www.dasburo.nl/projects/harborn/'
        data-backgroundcolor='#122124'
      >
        <div className={styles.gridItem__header}>
          <div className={styles.gridItem__imageWrapper}>
            <CoverImage
              title={post.title}
              url={post.coverImage.url}
              slug={styles.gridItem__image}
            />
          </div>
        </div>
        <h2 className={styles.gridItem__title}>
          <div className={styles.gridItem__titleDefault}>{post.title}</div>
          <div className={styles.gridItem__titleHover}>{post.title}</div>
        </h2>
        <p className={styles.gridItem__text}>
         {post.excerpt}
        </p>
      </div>
    </li>
  )
}
