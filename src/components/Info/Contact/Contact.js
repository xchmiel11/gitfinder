import styled from "styled-components";
import { FaMapMarkerAlt as MapIcon, FaLink as LinkIcon } from "react-icons/fa";

export default function Contact({ data }) {
  return (
    <Wrapper noLocation={!data.location}>
      <p>
        <MapIcon /> {data.location !== null ? data.location : "Not available"}
      </p>
      <a href={data.html_url} target="_BLANK" rel="noreferrer">
        <LinkIcon /> {data.html_url.substr(8)}
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  p,
  a {
    margin: 0.5rem 0;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    color: ${(props) => props.noLocation && "#666"};
  }

  a {
    text-decoration: none;
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (min-width: 530px) {
    padding-left: calc(75px + 2rem);

    p,
    a {
      margin: 0;
    }
  }
`;
