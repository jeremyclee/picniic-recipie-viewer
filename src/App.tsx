import { Col, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { Outlet, useNavigate, useParams } from "react-router-dom";

// import logo from "./logo.svg";
import "antd/dist/antd.css";

import "./App.css";
import Title from "antd/lib/typography/Title";
import Search from "antd/lib/input/Search";

function App() {
  const navigate = useNavigate();

  let params = useParams();

  const onSearch = (value: string) => {
    navigate(`families/${value}`);
  };

  return (
    <Layout>
      <Header>
        <Title style={{ color: "#fff" }}>Picniic Recipie Viewer</Title>
      </Header>
      <Content>
        {params.familyId ? (
          <></>
        ) : (
          <Row>
            <Col span={4}>
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </Col>
          </Row>
        )}
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
