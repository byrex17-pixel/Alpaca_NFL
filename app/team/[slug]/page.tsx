import { notFound } from "next/navigation";
import Link from "next/link";
import { getTeam, teams } from "../../../data/teams";

export function generateStaticParams(){ return teams.map(t=>({slug:t.slug})); }

export default async function TeamPage({ params }: { params: Promise<{slug:string}> }) {
  const {slug} = await params;
  const team = getTeam(slug);
  if(!team) notFound();
  return (
    <main style={{"--team":team.colors[0]} as React.CSSProperties}>
      <section className="team-hero" style={{"--city":`url(${team.cityImage})`} as React.CSSProperties}>
        <div className="container team-hero-content">
          <div className="team-kicker">{team.conference} · {team.division}</div>
          <h1 className="team-title">{team.name}</h1>
          <p className="team-sub">{team.motto} · {team.stadium}. Una ficha temática de la franquicia con el contexto de su ciudad y sus figuras históricas.</p>
          <div className="stat-strip">
            <div className="stat-box"><strong>{team.players.length}</strong><span>jugadores destacados</span></div>
            <div className="stat-box"><strong>2026</strong><span>temporada</span></div>
            <div className="stat-box"><strong>{team.coach.split(" ")[0]}</strong><span>head coach</span></div>
            <div className="stat-box"><strong>{team.conference}</strong><span>conferencia</span></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="team-layout">
          <div>
            <div className="panel">
              <div className="panel-head"><h2>Plantilla · jugadores activos</h2><span className="badge">LIVE ROSTER VIEW</span></div>
              <div className="table-wrap">
                <table><thead><tr><th>#</th><th>Jugador</th><th>Pos.</th><th>Estado</th><th>G</th><th>GS</th><th>Estadística clave</th></tr></thead>
                <tbody>{team.players.map(p=><tr key={p.name}><td>{p.number}</td><td className="player-name">{p.name}</td><td>{p.position}</td><td><span className="badge">{p.status}</span></td><td>{p.games}</td><td>{p.starts}</td><td>{p.keyStat}</td></tr>)}</tbody></table>
              </div>
            </div>
            <div className="notice">Las cifras mostradas en esta demo son una estructura de ejemplo para el proyecto. Para una versión conectada a datos en vivo, sustituye el fichero <b>data/teams.ts</b> por datos procedentes de una API de estadísticas autorizada.</div>
          </div>
          <aside className="side-stack">
            <div className="panel side-card"><h3>Coaching staff</h3><div className="coach">{team.coach}</div><p className="side-copy">Head Coach<br/>{team.coordinator}<br/>Defensive Coordinator</p></div>
            <div className="panel side-card"><h3>Leyendas</h3><div className="history">{team.historical.map(x=><span key={x}>{x}</span>)}</div></div>
            <div className="panel side-card"><h3>Franquicia</h3><p className="side-copy"><b>Ciudad:</b> {team.city}<br/><b>Estadio:</b> {team.stadium}<br/><b>División:</b> {team.division}</p></div>
            <Link className="btn" href="/#teams" style={{textAlign:"center",background:team.colors[0],color:"#fff",borderColor:"transparent"}}>← Volver a equipos</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
