'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-gray-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Try Again
      </button>
    </div>
  );
}
