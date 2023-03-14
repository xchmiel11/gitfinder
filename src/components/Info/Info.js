import styled from "styled-components";
import Header from "./Header/Header";
import Bio from "./Bio/Bio";
import Stats from "./Stats/Stats";
import Contact from "./Contact/Contact";

export default function Info({ data }) {
  return (
    <Wrapper>
      {data === null ? (
        <InfoText>No data</InfoText>
      ) : data !== null && Object.keys(data).length <= 1 ? (
        <InfoText>User not found</InfoText>
      ) : (
        <>
          <Header data={data} />
          <Bio data={data} />
          <Stats data={data} />
          <Contact data={data} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 1rem;
  background-color: #212946;
  border-radius: 8px;
`;

const InfoText = styled.div`
  text-align: center;
  color: #fff;
`;
