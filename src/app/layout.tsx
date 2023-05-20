import { NavBar } from '@/components/NavBar/NavBar';
import {
  BarlowBold, BarlowMedium, BarlowRegular,
  FlameBold, FlameRegular, FlameSans, FlameSansRegular
} from './font';
import './globals.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from '@/components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`
        ${FlameBold.variable} ${BarlowBold.variable}
        ${FlameRegular.variable} ${BarlowMedium.variable}
        ${FlameSansRegular.variable} ${BarlowRegular.variable}
        ${FlameSans.variable}
      `}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
