import carrosData from "@/data/CarrosData";

export default function DetalhesCarro({ params }: { params: { id: string } }) {
  const carro = carrosData.find((c) => c.id === Number(params.id));

  if (!carro) return <p>Carro não encontrado</p>;

  return (
    <div>
      <h2>Detalhes do {carro.modelo}</h2>
      <img src={carro.foto} alt={carro.modelo} width={300} />
      <p>Ano: {carro.ano}</p>
      <p>Especificações: {carro.especificacoes}</p>
      <p>Preço: {carro.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
    </div>
  );
}
