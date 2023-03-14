import styled from "styled-components";

export default function Bio({ data }) {
  return (
    <Wrapper>
      <p>{data.bio !== null ? data.bio : "No bio"}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;

  p {
    color: #9da5b9;
  }

  @media (min-width: 530px) {
    padding-left: calc(75px + 2rem);
  }
`;
