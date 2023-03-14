import styled from "styled-components";

export default function Header() {
  return (
    <Heading>
      <a href="/">
        Git<span>Finder</span>
      </a>
    </Heading>
  );
}

const Heading = styled.h1`
  max-width: 700px;
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  text-align: left;

  a {
    text-decoration: none;
    color: #fff;

    span {
      color: #3477f4;
      font-weight: 600;
    }
  }
`;
