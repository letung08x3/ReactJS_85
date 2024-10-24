import React, { useEffect, useState } from "react";

function Click(props) {
  const [countClick_1, setCountClick_1] = useState(0);
  const [countClick_2, setCountClick_2] = useState(0);

  const handleClick_1 = () => {
    setCountClick_1(countClick_1 + 1);
  };
  const handleClick_2 = () => {
    setCountClick_2(countClick_2 + 10);
  };

  useEffect(() => {
    console.log("Đoạn code 1 được thực thi");
  }, [countClick_1, countClick_2]);

  useEffect(() => {
    console.log("Đoạn code 2 được thực thi");
  }, [countClick_2]);

  useEffect(() => {
    console.log("Đoạn code 3 được thực thi");
  }, []);

  useEffect(() => {
    return () => {
      console.log("Đoạn code 4 được thực thi");
    };
  });

  return (
    <>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" class="btn btn-primary" onClick={handleClick_1}>
            Click 1
          </button>
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
        <h4>Bạn đã click {countClick_1} lần vào nút Click 1</h4>
      </div>

      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" class="btn btn-primary" onClick={handleClick_2}>
            Click 2
          </button>
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
        <h4>Bạn đã click {countClick_2} lần vào nút Click 2</h4>
      </div>
    </>
  );
}

export default Click;
