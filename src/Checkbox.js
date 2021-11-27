import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const list = [
    { checked: false, disabled: false, status: "00-未派車" },
    { checked: false, disabled: false, status: "01-未派車" },
    { checked: false, disabled: false, status: "02-未派車" },
    { checked: false, disabled: false, status: "03-未派車" },
    { checked: false, disabled: true, status: "04-未派車" },
    { checked: false, disabled: false, status: "05-未派車" },
    { checked: false, disabled: false, status: "06-未派車" },
    { checked: false, disabled: true, status: "07-未派車" },
    { checked: false, disabled: false, status: "08-未派車" },
    { checked: false, disabled: false, status: "09-未派車" }
  ];

  const [checkList, setCheckList] = useState(list);
  const [disableList, setDisableList] = useState(list);
  const [isShiftDown, setShiftDown] = useState(false);

  const handleChange = (e) => {
    // setCheckList({ [e.target.id]: e.target.checked });
  };

  const handleClick = useCallback(
    (e, index) => {
      if (isShiftDown) {
        setCheckList(
          checkList.map((item, key) => {
            if (key === index) {
              item.checked = !item.checked;
            }
            return item;
          })
        );
      } else {
        setCheckList(
          checkList.map((item, key) => {
            return { ...item, checked: key === index };
          })
        );
      }
    },
    [checkList, isShiftDown]
  );

  const handleKeyDown = (e) => {
    if (e.key === "Shift") {
      setShiftDown(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Shift") {
      setShiftDown(false);
    }
  };

  return (
    <div className="Checkbox">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>狀態</th>
          </tr>
        </thead>
        <tbody onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  onChange={handleChange}
                  onClick={(e) => handleClick(e, index)}
                  checked={checkList[index].checked}
                  disabled={disableList[index].disabled}
                />
              </td>
              <td>
                <label htmlFor={`checkbox-${index}`}>{item.status}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="back-home">
        <Link to="/">返回主頁</Link>
      </div>
    </div>
  );
};

export default Checkout;
