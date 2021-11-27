import styled, { css } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Page = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  display: block;
  width: 100%;
  height: calc(100% - 60px);
`;

const contentShareStyle = css`
  display: inline-block;
  vertical-align: top;
  height: 100%;
`;

const Aside = styled.aside`
  ${contentShareStyle}
  width: 60px;
  background-color: violet;
  word-break: break-word;
`;

const Content = styled.section`
  ${contentShareStyle}
  width: calc(100% - 60px);
  background-color: dodgerblue;
`;

const Layout1 = () => {
  return (
    <Page>
      <Header></Header>
      <Main>
        <Aside>
          <code>
            <p>display: inline-block;</p>
            <p>vertical: top;</p>
            <p>width: 60px;</p>
            <p>height: 100%;</p>
          </code>
        </Aside>
        <Content>
          <code>
            <p>display:inline-block;</p>
            <p>vertical: top;</p>
            <p>width: calc(100% - 60px);</p>
            <p>height: 100%</p>
          </code>
        </Content>
      </Main>
      <Footer></Footer>
    </Page>
  );
};

export default Layout1;
