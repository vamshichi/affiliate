'use client'


import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import newsArticlesData from '@/app/data/newsArticlesData'
import NewsGrid from '@/app/components/News/NewsGrid'

interface NewsDetailClientProps {
  slug: string
}

export default function NewsDetailClient({ slug }: NewsDetailClientProps) {
  const article = newsArticlesData.find((news) => news.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Link 
            href="/news" 
            className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <Link 
          href="/news" 
          className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to News
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative w-full md:min-w-96 h-96">
                <Image
                  src={article.image || '/placeholder.svg'}
                  alt={article.title}
                  fill
                  className="rounded-t-lg md:rounded-l-none md:rounded-t-none "
                />
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{article.date}</div>
              <h1 className="mt-2 text-3xl leading-8 font-serif tracking-tight text-gray-900 sm:text-4xl">{article.title}</h1>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                {article.readTime && (
                  <>
                    <Clock className="ml-4 mr-2" size={16} />
                    <span>{article.readTime} min read</span>
                  </>
                )}
              </div>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 whitespace-pre-wrap">
                {article.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
           <h2 className="text-3xl font-serif text-gray-800 mb-8 px-4">Latest News</h2>
           <NewsGrid showViewAllButton={true} limit={6} currentSlug={slug} />
       </div>
      </section>
    </div>
  )
}