import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
import CommentsForm from './CommentsForm'; // Ensure this is imported

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const result = await getComments(slug);
        setComments(result);
      } catch (err) {
        setError("Failed to load comments");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [slug]);

  return (
    <div className="comments-section" aria-live="polite">
      {loading && <p>Loading comments...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>
                {' '}on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && comments.length === 0 && (
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-lg font-semibold text-gray-700">No comments yet.</p>
          <p className="text-gray-600">Be the first to comment!</p>
          <CommentsForm slug={slug} /> {/* Include comment form */}
        </div>
      )}
    </div>
  );
};

export default Comments;
