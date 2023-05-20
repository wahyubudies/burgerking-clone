import { NavBar } from '@/components/NavBar/NavBar';
import { SlideShowImage } from '@/components/SlideShowImage/SlideShowImage';

export const metadata = {
  title: 'Home - Burger King',
  description: 'Burger King is an American-based multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain.',
};

export default function Home() {
  return (
    <>
      <NavBar />
      <SlideShowImage />
    </>
  );
}
