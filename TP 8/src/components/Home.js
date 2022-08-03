import Layout from "./Layout";
import PersonaCard from "./PersonaCard";

export default function Home({ personas }) {
    return (
        <div>
            <header>
                <Layout></Layout>
            </header>
            <div className="content">

                <div className="estadistica">
                    {personas.map((p) => (
                        <PersonaCard key={parseInt(p.id)} persona={p}></PersonaCard>
                    ))}
                </div>
            </div>
        </div>
    )
}