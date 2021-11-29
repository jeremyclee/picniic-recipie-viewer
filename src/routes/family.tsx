import { Row } from "antd";
import { Link, Outlet, useParams } from "react-router-dom";

export default function Family() {
  let params = useParams();

  return (
    <>
      <Row>
        <h2>Family: {params.familyId}</h2>
      </Row>
      <Row>
        <Link to="recipies">Recipies</Link>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </>
  );
}
