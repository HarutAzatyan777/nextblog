import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`} passHref>
      <a>
        <article className="post-card bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-10 mb-8 cursor-pointer">
          {/* Featured Image */}
          <div className="relative shadow-md mb-6">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={post.title}
              title={post.title}
              className="rounded-t-lg lg:rounded-lg"
              layout="responsive"
              width={500}
              height={300}
              src={post.featuredImage.url}
              objectFit="cover"
            />
          </div>

          {/* Title */}
          <h1 className="post-card__title transition duration-700 text-center mb-8 hover:text-pink-600 text-xl font-semibold">
            {post.title}
          </h1>

          {/* Author and Date */}
          <div className="post-card__meta block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className="post-card__author flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt={post.author.name}
                height={30}
                width={30}
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-sm">{post.author.name}</p>
            </div>
            <div className="post-card__date font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="post-card__excerpt text-center text-sm text-gray-700 font-normal px-4 lg:px-20 mb-8">
            {post.excerpt}
          </p>

          {/* Continue Reading */}
          <div className="text-center">
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-sm font-medium rounded-full text-white px-6 py-2">
              Continue Reading
            </span>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
