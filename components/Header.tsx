import styled from "styled-components";
import TinyKittenIcon from "./TinyKittenIcon";

const Root = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 48px;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  text-decoration: none;
`;

const Header: React.FC = () => {
  return (
    <Root>
      <Title>
        <a
          href="https://tinykitten.me"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TinyKittenIcon width={32} height={32} />
        </a>
      </Title>
    </Root>
  );
};

export default Header;
