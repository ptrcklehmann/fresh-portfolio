import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="mb-3 text-3xl leading-normal">
        <Link href={`/works/${slug}`}>
          <a className=" hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="mb-4 text-lg leading-normal">{excerpt}</p>

    </div>
  )
}
