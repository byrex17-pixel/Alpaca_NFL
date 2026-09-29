import Link from "next/link";
import { teams } from "../data/teams";

const codes: Record<string,string> = {
  "arizona-cardinals":"ARI","atlanta-falcons":"ATL","baltimore-ravens":"BAL","buffalo-bills":"BUF",
  "carolina-panthers":"CAR","chicago-bears":"CHI","cincinnati-bengals":"CIN","cleveland-browns":"CLE",
  "dallas-cowboys":"DAL","denver-broncos":"DEN","detroit-lions":"DET","green-bay-packers":"GB",
  "houston-texans":"HOU","indianapolis-colts":"IND","jacksonville-jaguars":"JAX","kansas-city-chiefs":"KC",
  "las-vegas-raiders":"LV","los-angeles-chargers":"LAC","los-angeles-rams":"LAR","miami-dolphins":"MIA",
  "minnesota-vikings":"MIN","new-england-patriots":"NE","new-orleans-saints":"NO","new-york-giants":"NYG",
  "new-york-jets":"NYJ","philadelphia-eagles":"PHI","pittsburgh-steelers":"PIT","san-francisco-49ers":"SF",
  "seattle-seahawks":"SEA","tampa-bay-buccaneers":"TB","tennessee-titans":"TEN","washington-commanders":"WAS"
};

export default function Home() {
  const afc = teams.filter(t=>t.conference==="AFC");
  const nfc = teams.filter(t=>t.conference==="NFC");
  return (
    <main>
      <section className="hero container" id="season">
        <div className="eyebrow">NFL · Temporada 2026</div>
        <h1>Todo el football.<br/><span style={{color:"#9fb2c7"}}>Un solo lugar.</span></h1>
        <p>Explora las plantillas, posiciones, rendimiento y staff técnico de las 32 franquicias. Una portada pensada para entender rápidamente qué historias pueden marcar la temporada 2026.</p>
        <div className="hero-actions">
          <a href="#teams" className="btn">Explorar equipos</a>
          <a href="#stories" className="btn secondary">Ver claves de la temporada</a>
        </div>
      </section>

      <section className="section container" id="stories">
        <div className="section-head"><div><h2>Qué esperar de 2026</h2><p className="section-intro">Una portada editorial que puedes ampliar con noticias, resultados y estadísticas a medida que avance la temporada.</p></div></div>
        <div className="story-grid">
          <article className="story"><span className="tag">Rookies</span><h3>La nueva generación entra en escena</h3><p>El draft vuelve a poner talento joven en posiciones clave. El portal reserva este espacio para seguir a los rookies con más impacto desde la primera jornada.</p></article>
          <article className="story"><span className="tag">Super Bowl</span><h3>Una carrera abierta por el título</h3><p>La temporada arranca con varias franquicias construidas alrededor de quarterbacks consolidados, defensas dominantes y núcleos jóvenes.</p></article>
          <article className="story"><span className="tag">Historias</span><h3>Jugadores que cambian narrativas</h3><p>Regresos, cambios de equipo y nuevas oportunidades pueden alterar el mapa competitivo durante los próximos meses.</p></article>
        </div>
      </section>

      <section className="section container" id="teams">
        <div className="section-head"><div><h2>Elige tu equipo</h2><p className="section-intro">Pulsa una franquicia para entrar en una ficha personalizada con sus colores, ciudad, historia, coaching staff y plantilla.</p></div></div>
        <Conference title="AFC" teams={afc} codes={codes}/>
        <Conference title="NFC" teams={nfc} codes={codes}/>
      </section>
    </main>
  );
}

function Conference({title, teams, codes}:{title:string,teams:typeof import("../data/teams").teams,codes:Record<string,string>}) {
  const divisions = [...new Set(teams.map(t=>t.division))];
  return <div className="conference"><h3>{title}</h3>{divisions.map(div=><div className="division" key={div}><h3>{div}</h3><div className="team-grid">{teams.filter(t=>t.division===div).map(t=>
    <Link href={`/team/${t.slug}`} key={t.slug} className="team-card" style={{"--c1":t.colors[0],"--c2":t.colors[1]} as React.CSSProperties}>
      <div className="team-code">{codes[t.slug]}</div><div className="team-name">{t.name}</div><div className="team-meta">{t.city} · {t.stadium}</div>
    </Link>)}</div></div>)}</div>;
}
