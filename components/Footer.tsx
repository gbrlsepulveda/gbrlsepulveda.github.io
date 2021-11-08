import styled from 'styled-components';

const FooterUI = styled.footer`
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterUI role="contentinfo">
      <h2>Entre em contato</h2>

      <h5>Gabriel Sepulveda - gabrielsepulveda07@gmail.com</h5>

      <small>
        Hospedado com{' '}
        <a href="http://pages.github.com/" target="_blank">
          Github Pages
        </a>
      </small>
    </FooterUI>
  );
}
