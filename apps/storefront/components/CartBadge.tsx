export function CartBadge({ count }: { count: number; loading?: boolean }) {
  if (count === 0) return null;

  return (
    <span className="text-[10px] w-4 h-4 rounded-full leading-none inline-flex items-center justify-center absolute bottom-1 right-0 text-white bg-black">
      {count}
    </span>
  );
}
