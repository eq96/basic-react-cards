import React from "react";

function ProfileCard({ title, handle, image, tag1, tag2, tag3 }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-96 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
      <img className="w-full h-56 object-cover" src={image} alt={title}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black dark:text-white">
          {title}
        </div>
        <p className="text-gray-700 text-base text-black dark:text-gray-400">
          {handle}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
          {tag1}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
          {tag2}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
          {tag3}
        </span>
      </div>
    </div>
  );
}

export default ProfileCard;
