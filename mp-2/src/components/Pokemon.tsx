import styled from "styled-components";


const div= styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 25px;
  padding: 20px;
  background-color: grey; 
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #444;
  background-color: #fff;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #e0f7fa;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  h3 {
    font-family: "Verdana", sans-serif;
    font-size: 1rem;
    margin: 0;
    color: #222; /* Make text dark so it's visible */
  }
`;

export interface PokemonType {
  id: number;
  name: string;
  image: string;
}

interface Props {
  items: PokemonType[];
}

export default function Pokemon({ items }: Props) {
  return (
    <div>
      {items.map((p) => (
        <Card key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>
          #{p.id} {p.name.charAt(0).toUpperCase() + p.name.slice(1)} 
          </h3>
        </Card>
      ))}
    </div>
  );
}
