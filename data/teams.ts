export type Player = {
  name: string;
  number: string;
  position: string;
  status: "ACT" | "IR" | "DEV";
  games: number;
  starts: number;
  keyStat: string;
};

export type Team = {
  slug: string;
  name: string;
  city: string;
  conference: "AFC" | "NFC";
  division: string;
  colors: [string, string];
  accent: string;
  description: string;
  coach: string;
  coordinator: string;
  stadium: string;
  motto: string;
  historical: string[];
  cityImage: string;
  players: Player[];
};

const genericPlayers: Player[] = [
  { name: "Franchise QB", number: "12", position: "QB", status: "ACT", games: 1, starts: 1, keyStat: "248 YDS / 2 TD" },
  { name: "Starting RB", number: "22", position: "RB", status: "ACT", games: 1, starts: 1, keyStat: "86 YDS / 1 TD" },
  { name: "WR1", number: "11", position: "WR", status: "ACT", games: 1, starts: 1, keyStat: "7 REC / 91 YDS" },
  { name: "WR2", number: "18", position: "WR", status: "ACT", games: 1, starts: 1, keyStat: "4 REC / 58 YDS" },
  { name: "TE1", number: "87", position: "TE", status: "ACT", games: 1, starts: 1, keyStat: "5 REC / 62 YDS" },
  { name: "LT", number: "74", position: "OT", status: "ACT", games: 1, starts: 1, keyStat: "1 start" },
  { name: "DT1", number: "90", position: "DT", status: "ACT", games: 1, starts: 1, keyStat: "4 TKL / 1 SCK" },
  { name: "EDGE1", number: "55", position: "EDGE", status: "ACT", games: 1, starts: 1, keyStat: "5 TKL / 2 SCK" },
  { name: "LB1", number: "52", position: "LB", status: "ACT", games: 1, starts: 1, keyStat: "9 TKL" },
  { name: "CB1", number: "24", position: "CB", status: "ACT", games: 1, starts: 1, keyStat: "5 TKL / 1 INT" },
  { name: "S1", number: "31", position: "S", status: "ACT", games: 1, starts: 1, keyStat: "6 TKL" }
];

const specs: Record<string, Partial<Team>> = {
  "arizona-cardinals": { name: "Arizona Cardinals", city: "Arizona", conference: "NFC", division: "NFC West", colors: ["#97233F","#FFB612"], accent:"#97233F", coach:"Jonathan Gannon", coordinator:"Nick Rallis · DC", stadium:"State Farm Stadium", motto:"Rise up Red Sea", historical:["Larry Fitzgerald","Kurt Warner","Aeneas Williams"], cityImage:"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80" },
  "atlanta-falcons": { name:"Atlanta Falcons", city:"Atlanta", conference:"NFC", division:"NFC South", colors:["#A71930","#000000"], accent:"#A71930", coach:"Raheem Morris", coordinator:"Jeff Ulbrich · DC", stadium:"Mercedes-Benz Stadium", motto:"Rise up", historical:["Deion Sanders","Matt Ryan","Julio Jones"], cityImage:"https://images.unsplash.com/photo-1577501864557-6f3d0fba4b84?auto=format&fit=crop&w=1600&q=80" },
  "baltimore-ravens": { name:"Baltimore Ravens", city:"Baltimore", conference:"AFC", division:"AFC North", colors:["#241773","#9E7C0C"], accent:"#9E7C0C", coach:"John Harbaugh", coordinator:"Zach Orr · DC", stadium:"M&T Bank Stadium", motto:"Play like a Raven", historical:["Ray Lewis","Ed Reed","Jonathan Ogden"], cityImage:"https://images.unsplash.com/photo-1590569248938-26cfdc4c4f84?auto=format&fit=crop&w=1600&q=80" },
  "buffalo-bills": { name:"Buffalo Bills", city:"Buffalo", conference:"AFC", division:"AFC East", colors:["#00338D","#C60C30"], accent:"#C60C30", coach:"Sean McDermott", coordinator:"Bobby Babich · DC", stadium:"Highmark Stadium", motto:"One Buffalo", historical:["Jim Kelly","Bruce Smith","Thurman Thomas"], cityImage:"https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1600&q=80" },
  "carolina-panthers": { name:"Carolina Panthers", city:"Charlotte", conference:"NFC", division:"NFC South", colors:["#0085CA","#101820"], accent:"#0085CA", coach:"Dave Canales", coordinator:"Robert Saleh · DC", stadium:"Bank of America Stadium", motto:"Keep Pounding", historical:["Steve Smith Sr.","Luke Kuechly","Cam Newton"], cityImage:"https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1600&q=80" },
  "chicago-bears": { name:"Chicago Bears", city:"Chicago", conference:"NFC", division:"NFC North", colors:["#0B162A","#C83803"], accent:"#C83803", coach:"Ben Johnson", coordinator:"Dennis Allen · DC", stadium:"Soldier Field", motto:"Bear Down", historical:["Walter Payton","Dick Butkus","Brian Urlacher"], cityImage:"https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1600&q=80" },
  "cincinnati-bengals": { name:"Cincinnati Bengals", city:"Cincinnati", conference:"AFC", division:"AFC North", colors:["#FB4F14","#000000"], accent:"#FB4F14", coach:"Zac Taylor", coordinator:"Al Golden · DC", stadium:"Paycor Stadium", motto:"Who Dey", historical:["Anthony Muñoz","Ken Anderson","Chad Johnson"], cityImage:"https://images.unsplash.com/photo-1569074187119-c87815b476da?auto=format&fit=crop&w=1600&q=80" },
  "cleveland-browns": { name:"Cleveland Browns", city:"Cleveland", conference:"AFC", division:"AFC North", colors:["#311D00","#FF3C00"], accent:"#FF3C00", coach:"Todd Monken", coordinator:"Mike Rutenberg · DC", stadium:"Cleveland Browns Stadium", motto:"Dawg Pound", historical:["Jim Brown","Otto Graham","Ozzie Newsome"], cityImage:"https://images.unsplash.com/photo-1544281679-6a2a8f7c9b2f?auto=format&fit=crop&w=1600&q=80" },
  "dallas-cowboys": { name:"Dallas Cowboys", city:"Dallas", conference:"NFC", division:"NFC East", colors:["#041E42","#869397"], accent:"#869397", coach:"Brian Schottenheimer", coordinator:"Matt Eberflus · DC", stadium:"AT&T Stadium", motto:"America's Team", historical:["Emmitt Smith","Troy Aikman","Michael Irvin"], cityImage:"https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=1600&q=80" },
  "denver-broncos": { name:"Denver Broncos", city:"Denver", conference:"AFC", division:"AFC West", colors:["#FB4F14","#002244"], accent:"#FB4F14", coach:"Sean Payton", coordinator:"Vance Joseph · DC", stadium:"Empower Field at Mile High", motto:"United in Orange", historical:["John Elway","Shannon Sharpe","Von Miller"], cityImage:"https://images.unsplash.com/photo-1546156929-a4c3b5d5c2b5?auto=format&fit=crop&w=1600&q=80" },
  "detroit-lions": { name:"Detroit Lions", city:"Detroit", conference:"NFC", division:"NFC North", colors:["#0076B6","#B0B7BC"], accent:"#0076B6", coach:"Dan Campbell", coordinator:"Kelvin Sheppard · DC", stadium:"Ford Field", motto:"One Pride", historical:["Barry Sanders","Calvin Johnson","Dick LeBeau"], cityImage:"https://images.unsplash.com/photo-1570215171323-4ec328f3f5e5?auto=format&fit=crop&w=1600&q=80" },
  "green-bay-packers": { name:"Green Bay Packers", city:"Green Bay", conference:"NFC", division:"NFC North", colors:["#203731","#FFB612"], accent:"#FFB612", coach:"Matt LaFleur", coordinator:"Jeff Hafley · DC", stadium:"Lambeau Field", motto:"Go Pack Go", historical:["Bart Starr","Brett Favre","Reggie White"], cityImage:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80" },
  "houston-texans": { name:"Houston Texans", city:"Houston", conference:"AFC", division:"AFC South", colors:["#03202F","#A71930"], accent:"#A71930", coach:"DeMeco Ryans", coordinator:"Matt Burke · DC", stadium:"NRG Stadium", motto:"We Are Texans", historical:["Andre Johnson","J.J. Watt","Arian Foster"], cityImage:"https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1600&q=80" },
  "indianapolis-colts": { name:"Indianapolis Colts", city:"Indianapolis", conference:"AFC", division:"AFC South", colors:["#002C5F","#A2AAAD"], accent:"#002C5F", coach:"Shane Steichen", coordinator:"Lou Anarumo · DC", stadium:"Lucas Oil Stadium", motto:"Horseshoe Nation", historical:["Peyton Manning","Marvin Harrison","Edgerrin James"], cityImage:"https://images.unsplash.com/photo-1535997458074-3b4aab7b5f2b?auto=format&fit=crop&w=1600&q=80" },
  "jacksonville-jaguars": { name:"Jacksonville Jaguars", city:"Jacksonville", conference:"AFC", division:"AFC South", colors:["#006778","#D7A22A"], accent:"#D7A22A", coach:"Liam Coen", coordinator:"Anthony Weaver · DC", stadium:"EverBank Stadium", motto:"DUUUVAL", historical:["Tony Boselli","Fred Taylor","Maurice Jones-Drew"], cityImage:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80" },
  "kansas-city-chiefs": { name:"Kansas City Chiefs", city:"Kansas City", conference:"AFC", division:"AFC West", colors:["#E31837","#FFB81C"], accent:"#E31837", coach:"Andy Reid", coordinator:"Steve Spagnuolo · DC", stadium:"GEHA Field at Arrowhead Stadium", motto:"Chiefs Kingdom", historical:["Patrick Mahomes","Tony Gonzalez","Derrick Thomas"], cityImage:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1600&q=80" },
  "las-vegas-raiders": { name:"Las Vegas Raiders", city:"Las Vegas", conference:"AFC", division:"AFC West", colors:["#000000","#A5ACAF"], accent:"#A5ACAF", coach:"Antonio Pierce", coordinator:"Patrick Graham · DC", stadium:"Allegiant Stadium", motto:"Just Win Baby", historical:["Marcus Allen","Howie Long","Tim Brown"], cityImage:"https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80" },
  "los-angeles-chargers": { name:"Los Angeles Chargers", city:"Los Angeles", conference:"AFC", division:"AFC West", colors:["#0080C6","#FFC20E"], accent:"#FFC20E", coach:"Jim Harbaugh", coordinator:"Jesse Minter · DC", stadium:"SoFi Stadium", motto:"Bolt Up", historical:["Dan Fouts","LaDainian Tomlinson","Junior Seau"], cityImage:"https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=1600&q=80" },
  "los-angeles-rams": { name:"Los Angeles Rams", city:"Los Angeles", conference:"NFC", division:"NFC West", colors:["#003594","#FFA300"], accent:"#FFA300", coach:"Sean McVay", coordinator:"Chris Shula · DC", stadium:"SoFi Stadium", motto:"Whose House?", historical:["Kurt Warner","Eric Dickerson","Aaron Donald"], cityImage:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80" },
  "miami-dolphins": { name:"Miami Dolphins", city:"Miami", conference:"AFC", division:"AFC East", colors:["#008E97","#FC4C02"], accent:"#FC4C02", coach:"Mike McDaniel", coordinator:"Anthony Weaver · DC", stadium:"Hard Rock Stadium", motto:"Fins Up", historical:["Dan Marino","Jason Taylor","Zach Thomas"], cityImage:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" },
  "minnesota-vikings": { name:"Minnesota Vikings", city:"Minneapolis", conference:"NFC", division:"NFC North", colors:["#4F2683","#FFC62F"], accent:"#FFC62F", coach:"Kevin O'Connell", coordinator:"Brian Flores · DC", stadium:"U.S. Bank Stadium", motto:"Skol", historical:["Randy Moss","Adrian Peterson","Alan Page"], cityImage:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80" },
  "new-england-patriots": { name:"New England Patriots", city:"Foxborough", conference:"AFC", division:"AFC East", colors:["#002244","#C60C30"], accent:"#C60C30", coach:"Mike Vrabel", coordinator:"Terrell Williams · DC", stadium:"Gillette Stadium", motto:"Do Your Job", historical:["Tom Brady","Rob Gronkowski","Richard Seymour"], cityImage:"https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80" },
  "new-orleans-saints": { name:"New Orleans Saints", city:"New Orleans", conference:"NFC", division:"NFC South", colors:["#D3BC8D","#101820"], accent:"#D3BC8D", coach:"Kellen Moore", coordinator:"Brandon Staley · DC", stadium:"Caesars Superdome", motto:"Who Dat", historical:["Drew Brees","Rickey Jackson","Willie Roaf"], cityImage:"https://images.unsplash.com/photo-1506501139177-8a3f0d2c0b5f?auto=format&fit=crop&w=1600&q=80" },
  "new-york-giants": { name:"New York Giants", city:"New York", conference:"NFC", division:"NFC East", colors:["#0B2265","#A71930"], accent:"#A71930", coach:"Brian Daboll", coordinator:"Charlie Bullen · DC", stadium:"MetLife Stadium", motto:"Big Blue", historical:["Lawrence Taylor","Eli Manning","Michael Strahan"], cityImage:"https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1600&q=80" },
  "new-york-jets": { name:"New York Jets", city:"New York", conference:"AFC", division:"AFC East", colors:["#125740","#000000"], accent:"#125740", coach:"Aaron Glenn", coordinator:"Steve Wilks · DC", stadium:"MetLife Stadium", motto:"J-E-T-S", historical:["Joe Namath","Darrelle Revis","Curtis Martin"], cityImage:"https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1600&q=80" },
  "philadelphia-eagles": { name:"Philadelphia Eagles", city:"Philadelphia", conference:"NFC", division:"NFC East", colors:["#004C54","#A5ACAF"], accent:"#A5ACAF", coach:"Nick Sirianni", coordinator:"Vic Fangio · DC", stadium:"Lincoln Financial Field", motto:"Fly Eagles Fly", historical:["Reggie White","Brian Dawkins","Donovan McNabb"], cityImage:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80" },
  "pittsburgh-steelers": { name:"Pittsburgh Steelers", city:"Pittsburgh", conference:"AFC", division:"AFC North", colors:["#FFB612","#101820"], accent:"#FFB612", coach:"Mike Tomlin", coordinator:"Teryl Austin · DC", stadium:"Acrisure Stadium", motto:"Here We Go", historical:["Terry Bradshaw","Mean Joe Greene","Troy Polamalu"], cityImage:"https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1600&q=80" },
  "san-francisco-49ers": { name:"San Francisco 49ers", city:"San Francisco", conference:"NFC", division:"NFC West", colors:["#AA0000","#B3995D"], accent:"#AA0000", coach:"Kyle Shanahan", coordinator:"Robert Saleh · DC", stadium:"Levi's Stadium", motto:"Faithful to the Bay", historical:["Joe Montana","Jerry Rice","Steve Young","Patrick Willis"], cityImage:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80" },
  "seattle-seahawks": { name:"Seattle Seahawks", city:"Seattle", conference:"NFC", division:"NFC West", colors:["#002244","#69BE28"], accent:"#69BE28", coach:"Mike Macdonald", coordinator:"Aden Durde · DC", stadium:"Lumen Field", motto:"Go Hawks", historical:["Steve Largent","Walter Jones","Marshawn Lynch"], cityImage:"https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1600&q=80" },
  "tampa-bay-buccaneers": { name:"Tampa Bay Buccaneers", city:"Tampa Bay", conference:"NFC", division:"NFC South", colors:["#D50A0A","#FF7900"], accent:"#D50A0A", coach:"Todd Bowles", coordinator:"Kacy Rodgers · DC", stadium:"Raymond James Stadium", motto:"Fire the Cannons", historical:["Tom Brady","Derrick Brooks","Warren Sapp"], cityImage:"https://images.unsplash.com/photo-1496813003737-6c3d6f2b8f4d?auto=format&fit=crop&w=1600&q=80" },
  "tennessee-titans": { name:"Tennessee Titans", city:"Nashville", conference:"AFC", division:"AFC South", colors:["#0C2340","#4B92DB"], accent:"#4B92DB", coach:"Brian Callahan", coordinator:"Dennard Wilson · DC", stadium:"Nissan Stadium", motto:"Titan Up", historical:["Steve McNair","Eddie George","Warren Moon"], cityImage:"https://images.unsplash.com/photo-1545947846-7f8e3f0c8d47?auto=format&fit=crop&w=1600&q=80" },
  "washington-commanders": { name:"Washington Commanders", city:"Washington, D.C.", conference:"NFC", division:"NFC East", colors:["#5A1414","#FFB612"], accent:"#FFB612", coach:"Dan Quinn", coordinator:"Joe Whitt Jr. · DC", stadium:"Northwest Stadium", motto:"Raise Hail", historical:["Darrell Green","John Riggins","Sean Taylor"], cityImage:"https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=1600&q=80" }
};

const slugs = Object.keys(specs);
export const teams: Team[] = slugs.map((slug) => {
  const s = specs[slug];
  return {
    slug,
    name: s.name!,
    city: s.city!,
    conference: s.conference!,
    division: s.division!,
    colors: s.colors!,
    accent: s.accent!,
    description: `${s.name} · ${s.division}`,
    coach: s.coach!,
    coordinator: s.coordinator!,
    stadium: s.stadium!,
    motto: s.motto!,
    historical: s.historical!,
    cityImage: s.cityImage!,
    players: slug === "san-francisco-49ers" ? [
      { name:"Brock Purdy", number:"13", position:"QB", status:"ACT", games:1, starts:1, keyStat:"248 YDS / 2 TD" },
      { name:"Christian McCaffrey", number:"23", position:"RB", status:"ACT", games:1, starts:1, keyStat:"86 RUSH YDS / 1 TD" },
      { name:"George Kittle", number:"85", position:"TE", status:"ACT", games:1, starts:1, keyStat:"5 REC / 62 YDS" },
      { name:"Brandon Aiyuk", number:"11", position:"WR", status:"ACT", games:1, starts:1, keyStat:"7 REC / 91 YDS" },
      { name:"Deebo Samuel Sr.", number:"19", position:"WR", status:"ACT", games:1, starts:1, keyStat:"4 REC / 58 YDS" },
      { name:"Trent Williams", number:"71", position:"OT", status:"ACT", games:1, starts:1, keyStat:"1 START" },
      { name:"Nick Bosa", number:"97", position:"DE", status:"ACT", games:1, starts:1, keyStat:"5 TKL / 2 SCK" },
      { name:"Fred Warner", number:"54", position:"LB", status:"ACT", games:1, starts:1, keyStat:"9 TKL" },
      { name:"Deommodore Lenoir", number:"2", position:"CB", status:"ACT", games:1, starts:1, keyStat:"5 TKL / 1 INT" },
      { name:"Ji'Ayir Brown", number:"27", position:"S", status:"ACT", games:1, starts:1, keyStat:"6 TKL" },
      { name:"Mykel Williams", number:"98", position:"DE", status:"ACT", games:1, starts:1, keyStat:"3 TKL / 1 SCK" }
    ] : genericPlayers
  };
});

export const getTeam = (slug: string) => teams.find(t => t.slug === slug);
