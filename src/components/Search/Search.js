import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export default function Header({ getUsername }) {
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);

  const findUser = () => {
    username !== "" ? setErr(false) : setErr(true);

    username !== "" && getUsername(username);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && findUser();
  };

  return (
    <Wrapper>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
        err={err}
        placeholder={
          !err ? "Search GitHub username..." : "The field cannot be empty"
        }
      />
      <Btn onClick={findUser}>
        <FaSearch />
      </Btn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 1rem;
  background-color: #212946;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

const Input = styled.input`
  min-width: 150px;
  width: 90%;
  margin-right: 0.5rem;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #fff;

  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.err && "#d62424"};
  }
`;

const Btn = styled.button`
  width: 60px;
  height: 50px;
  background-color: #3477f4;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 1rem;
  }
`;
