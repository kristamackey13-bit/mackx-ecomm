import { WalletConnect } from "./wallet-connect";

const services = [
  ["Ecommerce product research","Product discovery, competitor research, and market insights."],
  ["Social media graphics","Scroll-stopping creative assets for your brand."],
  ["Virtual assistant tasks","Reliable help with everyday business operations."],
  ["Website design","Clean, conversion-focused websites and landing pages."],
  ["Product listing management","Product uploads, descriptions, and catalog organization."],
];

export default function Home() {
  return <main className="shell">
    <nav className="nav"><div className="brand">mackx <span>ecomm</span></div><div className="pill">Private beta · Built on Base</div></nav>
    <section className="hero"><div className="eyebrow">Your work. Your marketplace.</div><h1>Get things done.<br/><span style={{color:"#aab7ff"}}>Grow your business.</span></h1><p className="lead">Find skilled help for ecommerce and digital work, or offer your skills to businesses that need them. One marketplace, practical services, transparent payments.</p><div className="actions"><a className="primary" href="#services">Explore services</a><a className="secondary" href="#wallet">Connect wallet</a></div></section>
    <section id="services"><h2 className="section-title">Services to move your business forward</h2><p className="small">Start with focused, useful work from independent service providers.</p><div className="grid">{services.map(([name,description])=><article className="panel" key={name}><h3>{name}</h3><p>{description}</p></article>)}</div></section>
    <section id="wallet" className="panel" style={{marginTop:30}}><div className="wallet"><div><h2 className="section-title">Connect your Base wallet</h2><p className="small">Customer accounts require a connected wallet. Wallet connection here is an initial interface step, not yet full account authentication.</p></div><WalletConnect/></div><p className="small" style={{marginTop:16}}>Network: Base · Intended payment currency: USDC. Do not send funds to this starter site.</p></section>
    <section className="grid" style={{marginTop:16}}><article className="panel"><h3>For customers</h3><p>Discover services, agree on deliverables, and track work from one place.</p></article><article className="panel"><h3>For workers</h3><p>Showcase your skills, complete tasks, and request approved USDC payouts.</p></article><article className="panel"><h3>Fair marketplace fee</h3><p>A planned 15% platform fee supports marketplace operations. Earnings and payouts will be transparently itemized.</p></article></section>
    <footer>© {new Date().getFullYear()} mackx ecomm · Private beta preview. Payments and account registration are not enabled yet.</footer>
  </main>;
}
