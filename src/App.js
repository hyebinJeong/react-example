import logo from './logo.svg';
import './App.css';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';

function App() {

  const name = "승환2"
  // const style = {
  //   color: 'red'
  // } => 원래 이런식으로 스타일 만든 후,
  // <h1 className="test" style={style}>HELLO REACT</h1> 이런식으로 스타일 태그 내에 정의해놓은 style 변수를 넣어서 사용함
  
  //넌적스처럼 {} 사용하기

  return (
    //교재 p.56~ p.75(리액트를 다루는 기술)
    //JSX 문법: JS + HTML
    //규칙1 : 화면구성요소(태그들)은 반드시 하나의 태그안에 담겨있어야 한다

    //규칙2 : JS의 문법을 HTML 내부에서 이욜해 줄 때는 {}를 이용한다 !
    //변수출력, 삼항연산자, 함수사용만 가능하다 !
    //if, for문은 안됨
    //삼항연산자 => 조건식 ? true 실행 : false 실행

    //규칙3 : JSC 에서 사용하는 HTML의 모든 태그는 여는 태그와 닫는 태그를 함께 사용해야 한다

    //<br>, <input> --> 반드시 닫는 태그까지 사용해야함 ~! </br>, </input>

    /* name 있는 값이 승환 -> '승환 오늘도 화이팅'
             승환 아니라면 -> '모두 오늘도 화이팅'
     <h1> {name == '승환'? name : '모두'} 오늘도 화이팅! </h1>' */

     //규칙4 : class를 지칭해줄때 className을 사용함

    // props : 컴포넌트 끼리 데이터 전달시 사용!
    // (부모 컴포넌트에서 자식 컴포넌트로 데이터 전달시 사용 되어짐)


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div>
        {/* JSX 안의 HTML태그에 STYLE 적용시킬때는 {{}} 중괄호 두번 사용한다 ! (한번 아님)
            JSX STYLE 적용은 객체 형식으로 적용시킬 수 있다 */}
          <h1 className='test' style={{color: 'red'}}>HELLO REACT!</h1>
          <h1>월요일 화이팅!</h1>
          {/* <h1>{name} 오늘도 화이팅!</h1> */}
          <h1> {name == '승환'? name : '모두'} 오늘도 화이팅! </h1>
          {name == '승환' ? <Ex01></Ex01> : <Ex02></Ex02>}
          {/* name이 승환이면 Ex01, 아니면 Ex02 화면이 뜸 */}
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//위의 내용을 다른곳에서 사용할 수 있도록 내보내겠습니다. 라는 의미!
