'use client';

import useSWR from 'swr';

export function SWRExample() {
  const { data, error, isLoading } = useSWR(
    'posts:*,limit.3,order.created_at.desc',
  );

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700">error loading data: {error.message}</p>
        <p className="text-xs text-red-600 mt-1">
          make sure supabase is configured and the seed data is loaded
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-gray-600">loading posts...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h3 className="font-semibold text-blue-900 mb-2">
        swr + supabase example
      </h3>
      {data?.length ? (
        <div className="space-y-2">
          <p className="text-blue-700 text-sm mb-3">
            loaded {data.length} recent posts:
          </p>
          {data.map((post: any) => (
            <div key={post.id} className="bg-white/50 p-2 rounded text-xs">
              <p className="font-medium text-blue-900">{post.title}</p>
              <p className="text-blue-600 truncate">{post.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-blue-700 text-sm">no posts found</p>
      )}
      <p className="text-xs text-blue-600 mt-3">
        this data is cached and will revalidate automatically
      </p>
    </div>
  );
}
