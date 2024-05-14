/* eslint-disable @next/next/no-img-element */
export function CartBadge({
  count,
  loading,
}: {
  count: number;
  loading?: boolean;
}) {
  if (loading)
    return (
      <span className='text-[10px] w-4 h-4 rounded-full leading-none inline-flex items-center justify-center absolute bottom-1 right-0 text-white bg-black'>
        <img
          src='/images/loading-spinner.gif'
          alt='Loading'
          className='w-3 h-3'
          height={12}
          width={12}
        />
      </span>
    );

  if (count === 0) return null;

  return (
    <span className='text-[10px] w-4 h-4 rounded-full leading-none inline-flex items-center justify-center absolute bottom-1 right-0 text-white bg-black'>
      {count}
    </span>
  );
}
