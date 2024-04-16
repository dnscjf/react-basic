import React, { useState } from "react";

const Main = () => {
    const object = { a: 1, b: 2, c: 3, };
    const nextObject = {...object, b:5}; // object 사본을 만들어서 b 값만 덮어쓴다.
    console.log(nextObject, object);

    const array = [
        {id:1, value: true},
        {id:2, value: true}, 
        {id:3, value: false}, 
        {id:4, value: true}, 
        {id:5, value: false}, 
        {id:6, value: true},
    ];

    let nextArray = array.concat({id:7}) // 새 항목 추가
    nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
    // id가 1인 항목의 value를 false로 설정
    nextArray.map(item => (item === 1 ? {...item, value: false } : item));

    console.log(array);
    console.log(nextArray);

    return (
        <div>
            <button onClick={nClickEnter}>입장</button>
            <button onClick={onclickLeave}>퇴장</button>
            <h1 style={{ color: "color" }}>{message}</h1>
        </div>
    )
};

Main.defaultProps = {
    title: "기본 이름",
};

export default Main;