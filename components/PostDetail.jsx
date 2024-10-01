import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
  const renderContentFragment = (index, text, obj, type) => {
    let modifiedText = Array.isArray(text) ? text : [text];

    if (obj) {
      if (obj.bold) {
        modifiedText = [<strong key={index}>{text}</strong>];
      }

      if (obj.italic) {
        modifiedText = [<em key={index}>{text}</em>];
      }

      if (obj.underline) {
        modifiedText = [<u key={index}>{text}</u>];
      }

      if (obj.type === 'link') {
        return (
          <a
            key={index}
            href={obj.href}
            target={obj.openInNewTab ? '_blank' : '_self'}
            rel={obj.openInNewTab ? 'noopener noreferrer' : undefined}
            className="text-blue-500 hover:underline"
          >
            {obj.children.map((child, childIndex) => (
              <React.Fragment key={childIndex}>{child.text}</React.Fragment>
            ))}
          </a>
        );
      }
    }

    const contentTypes = {
      'heading-three': (
        <h3 key={index} className="text-xl font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      ),
      paragraph: (
        <p key={index} className="mb-8">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      ),
      'heading-four': (
        <h4 key={index} className="text-md font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      ),
      image: (
        <img
          key={index}
          alt={obj.title}
          title={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
          className="max-w-[800px] h-auto rounded-lg mx-auto" // Set max width to 800px
        />
      ),
    };

    return contentTypes[type] || modifiedText;
  };

  return (
    <article className="post-detail bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6 flex justify-center items-center">
        <img
          src={post.featuredImage.url}
          title={post.title}
          alt={post.title}
          className="object-top max-w-[800px] h-auto object-cover shadow-lg rounded-t-lg lg:rounded-lg mx-auto" // Set max width to 800px
        />
      </div>
      <div className="max-w-3xl mx-auto px-4 lg:px-0">
        <div className="post-detail__meta flex items-center mb-8 w-full">
          <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => renderContentFragment(itemIndex, item.text, item));
          return renderContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </article>
  );
};

export default PostDetail;
