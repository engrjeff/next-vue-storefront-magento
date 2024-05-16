/* eslint-disable @next/next/no-img-element */
type LinkChipIcon =
  | "lazy-ceo"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "sharktank";

const iconMap: Record<LinkChipIcon, string> = {
  "lazy-ceo":
    "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwa397b1aa/images/jane-lu/logo.jpg",
  instagram:
    "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwf9a30b5d/images/jane-lu/instagram.png",
  tiktok:
    "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwedadb6d7/images/jane-lu/tiktok.png",
  youtube:
    "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw326c41d5/images/jane-lu/youtube.png",
  facebook:
    "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw167ec97a/images/jane-lu/facebook.png",
  sharktank:
    "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwd781ade4/images/jane-lu/shark-tank-au.jpg",
};

interface LinkChipProps {
  icon: LinkChipIcon;
  label: string;
  href: string;
}

export function LinkChip({ icon, label, href }: LinkChipProps) {
  const iconSrc = iconMap[icon];

  return (
    <a
      href={href}
      target='_blank'
      referrerPolicy='no-referrer'
      className='bg-[#f4f4f4] px-2 py-[9px] rounded-full inline-block'
    >
      <img
        src={iconSrc}
        alt={`icon for ${label}`}
        width={20}
        height={20}
        className='inline-block mr-2 w-5 h-5 object-contain'
        loading='lazy'
      />
      <span className='text-[15px] font-medium'>{label}</span>
    </a>
  );
}
