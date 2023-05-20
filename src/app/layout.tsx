import {
  BarlowBold, BarlowMedium, BarlowRegular,
  FlameBold, FlameRegular, FlameSans, FlameSansRegular
} from './font';
import './globals.css';

import 'bootstrap/dist/css/bootstrap.css';

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
      <body>{children}</body>
    </html>
  );
}
