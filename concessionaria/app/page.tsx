import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Bem-vindo à Concessionária</h2>
      <Link href="/listaCarros">Ver Lista de Carros</Link>
    </div>
  );
}