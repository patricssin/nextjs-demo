import NavBar from '../components/NavBar';
import { exo2, orbitron } from './fonts';
import './globals.css';

export const metadata = {
  title: {
    default: 'NextJS',
    template: '%s | NextJS',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-pink-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs">
          Article data and images courtesy of{' '}
          <a href="https://medium.com/" target="_blank"
            className="text-pink-800 hover:underline">
            Medium
          </a>
        </footer>
      </body>
    </html>
  );
}
