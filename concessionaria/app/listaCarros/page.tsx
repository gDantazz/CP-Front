import Link from "next/link";
import carrosData from "@/data/CarrosData";

export default function ListaCarros() {
  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        {carrosData.map((carro) => (
          <li key={carro.id}>
            <img src={carro.foto} alt={carro.modelo} width={150} />
            <p>{carro.modelo} - {carro.ano}</p>
            <Link href={`/detalhesCarro/${carro.id}`}>Ver Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}