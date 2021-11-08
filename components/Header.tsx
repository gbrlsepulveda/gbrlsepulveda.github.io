import styled from 'styled-components';

const HeaderUI = styled.header`
  display: flex;
  width: 100vw;
  padding: 1rem;
  background: ${({theme}) => theme.Colors.primary};
  color: #fff;
  z-index: 10;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
`;

export default function Header() {
  return (
    <HeaderUI role="banner">
      <h1 className="title">Gabriel Sepulveda</h1>
    </HeaderUI>
  );
}
