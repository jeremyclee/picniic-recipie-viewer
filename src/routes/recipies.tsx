import { Col, Layout, List, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { RecipieBox } from "../models/RecipieBox";

export default function Recipies() {
  let params = useParams();
  const [loading, setLoading] = useState(false);
  const [recipeBox, setRecipeBox] = useState<RecipieBox>();

  useEffect(() => {
    // load recipies
    const recipieBoxURL = `https://picniic-familydata.s3.us-west-2.amazonaws.com/${params.familyId}/recipebox.json`;

    setLoading(true);
    axios
      .get(recipieBoxURL)
      .then((response) => {
        setRecipeBox(response.data as RecipieBox);
      })
      .catch((err) => {
        console.log("error getting recipie box");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Col span={6}>
        <List
          itemLayout="horizontal"
          dataSource={recipeBox?.recipes || []}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<Link to={`${item.file}`}>{`${item.name} >`}</Link>}
              />
            </List.Item>
          )}
        />
      </Col>
      <Col span={18}>
        <Outlet />
      </Col>
    </>
  );
}
