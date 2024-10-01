import { useState, useEffect } from 'react';
import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, MyAd } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  const postsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll to the top of the page when the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Calculate the posts to display for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-10 mb-8">
      {/* Featured Posts Section */}
      <FeaturedPosts />
      
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* Display posts for the current page */}
          {currentPosts.map((post) => (
            <PostCard key={post.node.slug} post={post.node} />
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <MyAd />
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
