import DragonBall from "./components/DragonBall.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Character} from "./interfaces/Charcters.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 8px solid navy;
    border-radius: 16px;
    padding: 6.5rem;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 5rem;
    color: darkorange;
    letter-spacing: 1px;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Character[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://dragonball-api.com/api/characters");
            const {items} : {items: Character[]} = await rawData.json();
            setData(items);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <div>
                <Title>Dragon Ball Characters</Title>
                <DragonBall data={data} />
            </div>
        </ParentDiv>
    )
}