
// 컴포넌트(=사용자 정의 태그) : 화면을 구성하는 단위
// 화면을 구성하는 최소단위: 태그, 더 큰 단위: 컴포넌트

function Ex01() {
    return(
        <h1>Ex01 화면</h1>
    )
}

export default Ex01 
// 다른곳에서 사용할 수 있도록 내보내줌



// function Ex01(props) {
//     // props -> 부모 컴포넌트에서 보낸 데이터 전달
//     // 자식에서 부모로는 못보냄 (단방향)
//     // key value 형태로 받아온다
//     return(
//         <div>
//             <h1>첫번째 컴포</h1>
//             <h1>{props.userNick}님 환영합니다</h1>
//         </div>
//     )
// }
