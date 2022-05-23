import Link from 'next/link'
import React from 'react'
import styles from '../styles/works.module.css'
import CoverImage from './cover-image'

export default function ProjectItem({ post }) {
  console.log(post)
  return (
    <li className={styles.gridItem}>
      <div className={styles.projectLink}>
        <div className={styles.gridItem__header}>
          <div className={styles.gridItem__imageWrapper}>
            <CoverImage
              title={post.title}
              url={post.coverImage.url}
              slug={post.slug}
            />
          </div>
        </div>
        <h2 className={styles.gridItem__title}>
        <Link href={`/works/${post.slug}`}>
          <a aria-label={post.title}>
          <div className={styles.gridItem__titleDefault}>{post.title}</div>
          <div className={styles.gridItem__titleHover}>{post.title}</div>
          </a>
        </Link>
        </h2>
        <p className={styles.gridItem__text}>{post.excerpt}</p>
      </div>
    </li>
  )
}
