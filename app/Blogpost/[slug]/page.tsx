import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const data = ['blog-1', 'blog-2', 'blog-3', 'blog-4', 'blog-5']

  if (!data.includes(slug)) {
    notFound()
  }

 
  throw new Error("Something went wrong")

  return <div>My Post: {slug}</div>
}