import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Info from "./components/Info/Info";

export default function App() {
  const [data, setData] = useState(null);

  const getData = async (username) => {
    if (username !== "") {
      await fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) =>
          data.message !== undefined
            ? setData({ msg: "User not found" })
            : setData(data)
        );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Search getUsername={(username) => getData(username)} />
        <Info data={data} />
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #151C2E;
    font-family: 'Poppins', sans-serif;
  }
`;

const Wrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
