import { Metadata } from "next";

import JoinUsLink from "./components/JoinUsLink";
import OurStoryContent from "./components/OurStoryContent";
import TimelineSection from "./components/TimelineSection";

export const metadata: Metadata = {
  title: "Our Story",
};

function OurStoryPage() {
  return (
    <main className='space-y-20 font-light'>
      <OurStoryContent />
      <TimelineSection />
      <JoinUsLink />
    </main>
  );
}

export default OurStoryPage;
