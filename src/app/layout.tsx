import { NavBar } from '@/app/components/NavBar/NavBar';
import {
  BarlowBold, BarlowMedium, BarlowRegular,
  FlameBold, FlameRegular, FlameSans, FlameSansRegular
} from './font';
import './globals.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from '@/app/components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

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
      <head>
        <title>Burger King</title>
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
