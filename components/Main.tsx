import styled from 'styled-components';

const MainUI = styled.main`
  display: flex;
  width: 100vw;
  background: #eee;
`;

export default function Main({children}) {
  return <MainUI role="main">{children}</MainUI>;
}
