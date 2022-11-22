import styled from "styled-components";

export default function Stats({ data }) {
  return (
    <Wrapper>
      <Item>
        <p>Repos</p>
        <p>{data.public_repos}</p>
      </Item>
      <Item>
        <p>Followers</p>
        <p>{data.followers}</p>
      </Item>
      <Item>
        <p>Following</p>
        <p>{data.following}</p>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #151c2e;
  color: #fff;
  border-radius: 8px;

  @media (min-width: 530px) {
    width: calc(100% - 75px - 2rem);
    margin-left: calc(75px + 2rem);
  }
`;

const Item = styled.div`
  width: 30%;
  text-align: center;

  p:nth-child(1) {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #9da5b9;
  }
`;
