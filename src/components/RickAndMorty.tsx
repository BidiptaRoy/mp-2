import styled from "styled-components";
import type {Character} from "../interfaces/Charcters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: darkorange;
    color: black;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function RickAndMorty(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id}>
                        <h1>{char.name}</h1>
                        <p>Race: {char.race}</p>
                        <p>Power: {char.ki}</p>
                        <p>Affiliation: {char.affiliation}</p>
                        <img src={char.image} alt={`image of ${char.name}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}