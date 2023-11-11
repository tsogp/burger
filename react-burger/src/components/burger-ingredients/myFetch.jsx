import React, { useCallback, useEffect, useState } from "react";

const MyFetch = (url) => {
  const [myData, changeData] = useState({
    success: true,
    data: [],
  })

  const getData = useCallback(async() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        changeData({
          data: data,
        })
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
    }); 
  }, [url])

  useEffect(() => {
    getData();
  }, [url, getData])

  const { respData } = myData; 
  return respData;
}

export default MyFetch