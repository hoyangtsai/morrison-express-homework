import layoutImage from "./layout.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Morrison Express Homework</h1>
      <ol>
        <li>
          請用兩種 css 方法排出以下版面
          <div>
            <img
              className="layout-img"
              alt="layout"
              src={layoutImage}
              width="70%"
              height="70%"
            />
            <ul>
              <li>
                <Link to="/layout1">Layout1</Link>
              </li>
              <li>
                <Link to="/layout2">Layout2</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          使用 React Hook 完成，按住 Shift 可多選清單 Checkboxes ( 其中有不可選
          的須跳過 )
          <div>
            <p>
              <Link to="/checkbox">Checkbox</Link>
            </p>
          </div>
        </li>
        <li>
          請概述通常前端 CRUD 會用到的後端 API 有哪些，規格是甚麼
          <p>如果以用戶的角度出發</p>
          <ul>
            <li>POST - 新建用戶</li>
            <li>GET - 獲取用戶資訊</li>
            <li>UPDATE - 更新用戶資訊</li>
            <li>DELETE - 刪除用戶</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Home;
