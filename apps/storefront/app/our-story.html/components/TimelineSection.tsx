import Container from "@/components/Container";
import TimelineItem, { type ITimelineItem } from "./TimelineItem";

function TimelineSection() {
  return (
    <Container className='max-w-[1440px] px-4'>
      <h2 className='text-center text-xl mt-16 mb-10 uppercase'>
        Our Timeline
      </h2>
      {timelineData.map((timelineItem, index) => (
        <TimelineItem
          key={timelineItem.year}
          timelineItem={timelineItem}
          index={index}
          sequence={
            index === 0
              ? "first"
              : index === timelineData.length - 1
              ? "last"
              : undefined
          }
        />
      ))}
    </Container>
  );
}

export default TimelineSection;

const timelineData: ITimelineItem[] = [
  {
    year: "2022",
    image:
      "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw5c17c907/images/our_story/timeline-2022.png",
    contents: [
      {
        month: "July",
        body: "Introduced our second in-house label, Amalie The Label. This luxe collection composed of natural fibres embodies a chic and effortless summer aesthetic.",
      },
    ],
  },
  {
    year: "2021",
    contents: [
      {
        month: "June",
        body: "Launched our first ever in-house label, Sunday Society Club! We designed a range of on-trend and comfy loungewear basics that will level up your everyday style.",
      },
      {
        month: "October",
        body: "We became the official fashion partner of Love Island Australia, with your favourite Islanders showing off the hottest Showpo ‘fits in the Villa.",
      },
    ],
  },
  {
    year: "2020",
    image:
      "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwbb3cdd55/images/our_story/timeline-2020.png",
    contents: [
      {
        month: "April",
        body: "Relaunched our new website with a fresh look-and-feel for an elevated and seamless user experience. Happy browsing!",
      },
    ],
  },
  {
    year: "2019",
    contents: [
      {
        month: "May",
        body: "We launched our Bridal Collection! With brides-to-be in mind, we came out with a range of luxe bridal gowns and bridesmaid dresses inspired by the latest trends for our customers to live out their dream wedding.",
      },
      {
        month: "July",
        body: "We made it to the Hall of Fame, baby! Being inducted by Australia Post’s Online Retail Industry Award is one of our proudest moments.",
      },
    ],
  },
  {
    year: "2018",
    contents: [
      {
        month: "May",
        body: "As part of our focus on leading-edge innovation, we launched our App with a slick and user-friendly design, and market-leading features such as Visual Search.",
      },
      {
        month: "July",
        body: "Thanks to you guys, we were awarded Online Retailer of the Year in Australia at the Online Retail Industry Awards. We also went on to win Exporter of the Year at the Premier’s NSW Export Awards. Woohoo!",
      },
    ],
  },
  {
    year: "2017",
    image:
      "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw4b7c0299/images/our_story/timeline-2017.png",
    contents: [
      {
        month: "April",
        body: "As our international expansion picked up pace, we officially launched our US business and celebrated with a launch party in LA.",
      },
      {
        month: "December",
        body: "Our incredible warehouse team shipped our 1-millionth order!",
      },
    ],
  },
  {
    year: "2016",
    contents: [
      {
        month: "May",
        body: "We upped our social media game and hit a milestone of 1M followers on Instagram!",
      },
    ],
  },
  {
    year: "2014",
    image:
      "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwc25fd5f6/images/our_story/timeline-2014.png",
    contents: [
      {
        month: "September",
        body: "Held the first of our annual charity sample sales, with all profits going to charity. To date, we’re proud to say we’ve donated over $100k",
      },
    ],
  },
  {
    year: "2013",
    imageFit: "object-contain",
    image:
      "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw1c46c524/images/our_story/timeline-2013.png",
    contents: [
      {
        month: "February",
        body: "We decided to go ‘all-in’ with the online store and closed the three brick-and-mortar stores down.",
      },
      {
        month: "September",
        body: "We rebranded from Show Pony to Showpo!",
      },
    ],
  },
  {
    year: "2012",
    contents: [
      {
        month: "April",
        body: "The business grew and we (finally!) moved out of the garage and into our first real office in Sydney’s CBD!",
      },
    ],
  },
  {
    year: "2010",
    imageFit: "object-contain",
    image:
      "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw40db0be6/images/our_story/timeline-2010.png",
    contents: [
      {
        month: "September",
        body: "With just a few shelves of clothes, a website and a humble Facebook page, Show Pony was born - it all started in our founder, Jane Lu’s, parents' garage.",
      },
      {
        month: "November",
        body: "We opened our first brick-and-mortar store in Broadway, Sydney. We subsequently opened 2 more stores in Bondi Junction and Pitt St, CBD.",
      },
    ],
  },
];
