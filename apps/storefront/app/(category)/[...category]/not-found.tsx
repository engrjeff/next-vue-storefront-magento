import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return { title: "Error Page Not Found | Showpo UK" };
};

function NotFound() {
  return (
    <div className='text-center my-6'>
      <p className='font-semibold mb-1'>Sorry, we cannot find this page.</p>
      <p className='text-[#bbb]'>Check out our other pages.</p>
    </div>
  );
}

export default NotFound;
