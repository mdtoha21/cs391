import styled from "styled-components";



const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #444;
  background-color: #fff;
  text-align: center;

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
    color: #222; 
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
