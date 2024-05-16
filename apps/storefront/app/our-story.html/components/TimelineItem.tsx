import Image from "next/image";

import { cn } from "@/lib/utils";

export interface ITimelineItem {
  year: string;
  contents: { month: string; body: string }[];
  image?: string;
  imageFit?: "object-contain" | "object-cover";
}

interface TimelineProps {
  timelineItem: ITimelineItem;
  index: number;
  sequence?: string;
}

function TimelineItem({ timelineItem, index, sequence }: TimelineProps) {
  const order = index % 2;
  return (
    <div className='mb-4 grid grid-cols-[55px_1fr] gap-4 md:mb-0 md:grid-cols-[1fr_55px_1fr] md:gap-0'>
      <div
        data-order={order}
        className='timeline relative grid grid-cols-1 gap-2 border border-[#979797] text-[15px] md:grid-cols-12'
      >
        <div
          className={timelineItem.image ? "md:col-span-9" : "md:col-span-12"}
        >
          {timelineItem.contents.map((content) => (
            <div
              key={content.month + timelineItem.year}
              className='grid gap-4 p-4 md:grid-cols-12'
            >
              <span className='font-semibold md:col-span-3'>
                {content.month}
              </span>
              <p className='leading-snug md:col-span-9'>{content.body}</p>
            </div>
          ))}
        </div>
        {timelineItem.image && (
          <div
            className={cn(
              "relative w-full -order-1 md:col-span-3 aspect-square md:aspect-auto",
              {
                "md:-order-1": order === 1,
                "md:order-1": order !== 1,
              }
            )}
          >
            <Image
              src={timelineItem.image}
              alt='Showpo UK'
              fill
              unoptimized
              loading='lazy'
              className={cn(
                "h-full w-full object-cover",
                timelineItem.imageFit
              )}
            />
          </div>
        )}
      </div>
      <div
        data-order={order}
        data-sequence={sequence}
        className='timeline-joint relative hidden items-center justify-center md:flex'
      >
        <span></span>
      </div>
      <div
        className={cn(
          order === 1 ? "md:justify-self-end" : "",
          "self-center -order-1 md:order-none"
        )}
      >
        <span className='font-heading font-bold'>{timelineItem.year}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
