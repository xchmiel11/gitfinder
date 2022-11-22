import styled from "styled-components";

export default function Header({ data }) {
  const getDate = (date) => {
    const d = new Date(date);

    const day = d.getDate();
    const month = d.toLocaleString("en-GB", { month: "short" });
    const year = d.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <Wrapper>
      <Img src={data.avatar_url} alt="GitHub avatar" />
      <Content noEmail={!data.email}>
        <div>
          <h2>{data.login}</h2>
          {data.email !== null ? (
            <a href={`mailto:${data.email}`}>{`@${data.email}`}</a>
          ) : (
            <p>No email</p>
          )}
        </div>
        <div>
          <p>Joined {getDate(data.created_at)}</p>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 530px) {
    gap: 2rem;
  }
`;

const Img = styled.img`
  width: 75px;
  border-radius: 50%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  div:nth-child(1) {
    width: 100%;

    h2 {
      margin-bottom: 0.25rem;
      color: #fff;
      font-size: 1.3rem;
    }

    a {
      color: #3477f4;
      text-decoration: none;
    }

    p {
      color: ${(props) => props.noEmail && "#666"};
    }
  }

  div:nth-child(2) {
    width: 100%;

    p {
      margin-top: 0.25rem;
      color: #9da5b9;
    }
  }

  @media (min-width: 530px) {
    div:nth-child(1) {
      width: calc(100% - 165px);
    }

    div:nth-child(2) {
      width: 165px;

      p {
        margin: 0;
      }
    }
  }
`;
