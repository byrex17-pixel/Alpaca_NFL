import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NFL 2026 · The Gridiron Hub",
  description: "Portal académico de plantillas, jugadores y contexto de la temporada NFL 2026."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <Link href="/" className="brand"><span className="brand-mark">NFL</span><span>GRIDIRON HUB</span></Link>
          <nav className="navlinks">
            <Link href="/">Inicio</Link>
            <Link href="/#teams">Equipos</Link>
            <Link href="/#season">Temporada 2026</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="footer"><div className="container">NFL Gridiron Hub · Proyecto académico · Datos estructurados para poder actualizarse temporada a temporada.</div></footer>
    </>
  );
}
