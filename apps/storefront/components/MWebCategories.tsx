import { getMegamenu } from "@/services/queries/getMegamenu";
import { MWebCategory } from "./MWebCategory";

export async function MWebCategories() {
  const data = await getMegamenu();

  //   const mwebBlock = await getCMSBlocks(["nextjs-uk-megamenu"]);

  if (!data) return null;

  const { displayedCategories, megamenu } = data;

  return (
    <ul className='space-y-2' suppressHydrationWarning>
      {displayedCategories?.map((category) => (
        <li key={category?.uid}>
          <MWebCategory
            category={category}
            megamenu={megamenu as any}
            mwebBlock={undefined}
          />
        </li>
      ))}
    </ul>
  );
}
