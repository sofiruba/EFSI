import Layout from "./Layout";
import PersonaCard from "./PersonaCard";
import { Link } from "react-router-dom";

export default function Home({ personas }) {
    return (
        <div>
            <header>
                <Layout></Layout>
            </header>
            <div className="content">
                <h2>Lista de personas</h2>
                <div>
                    <div className="lista">
                        {personas.map((p) => {
                            let link = `/persona/${p.id}`;
                            return (

                                <div className="card">
                                    <p> {p.nombre} {p.apellido} </p>
                                    <Link to={link} className="link">Buscar persona</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}