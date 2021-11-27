import styled from "styled-components";
import { useRef } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Page = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
`;

const Aside = styled.aside`
  flex: 0 0 60px;
  height: 100%;
  background-color: violet;
  word-break: break-word;
`;

const Content = styled.section`
  flex: 1;
  height: 100%;
  background-color: dodgerblue;
`;

const Layout2 = () => {
  const asideRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <Page>
      <Header></Header>
      <Main>
        <Aside ref={asideRef}>
          <code>
            <p>flex: 0 0 60px;</p>
            <p>height: 100%</p>
            {/* { asideRef.current && asideRef.current.style.map(s => ['flex', 'height'].includes(s)).join(',') } */}
          </code>
        </Aside>
        <Content ref={contentRef}>
          <code>
            <p>flex: 1;</p>
            <p>height: 100%</p>
          </code>
        </Content>
      </Main>
      <Footer></Footer>
    </Page>
  );
};

export default Layout2;
