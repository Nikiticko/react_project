import React from 'react';

function App() {
    const num1 = 3;
    const num2 = 2;
    
    const name = 'John';
    const surname = 'Smit';
    
    const num = 4;
    
    let text1;
    const show = true;
    if (show){
      text1 = <p>text1</p>;
    } else{
      text1 = <p>text2</p>;
    }
    
    const isAdult = true;
    let age;
    if (isAdult){
      age = <p>уже есть 18</p>
    } else{
      age = <p>ещё нет 18</p>
    }

    let p;
    const isAdmin = true;
    if (isAdmin){
      p = <div>
        <p>это строка админа!!!!!!!!!!!!!!!</p>
        <p>это строка админа!!!!!!!!!!!!!!!</p>
        <p>это строка админа!!!!!!!!!!!!!!!</p>
        <p>это строка админа!!!!!!!!!!!!!!!</p>
      </div>
    }
  
    const age1 = 15;
    let abc;
    if (age1 >= 18){
      abc = <a href='http://rt.pornhub.com'>Ссылочка</a>;
    }else {
      abc = <p>Без ссылочки сегодня</p>;
    }
    const isAuth = true;
    const isAuth1 = false;
    
    function getDigitSum (number) {
      var figures = "" + number
      var sum = 0
      for (var i = 0; i < figures.length; i++) 
        sum += +figures[i]
      return sum
    }
    const sum = getDigitSum(123);

    function getDigitSum1 (number) {
      var figures = "" + number
      var sum = 0
      for (var i = 0; i < figures.length; i++) 
        sum += +figures[i]
      return sum
    }

    function act1(){
      alert('Вы нажали на первую кнопку')
    }
    function act2(){
      alert('Вы нажали на вторую кнопку')
    }
  return <>
    <div className='23.1'>
      <ul>
        <li>text1</li>
        <li>text2</li>
        <li>text3</li>
        <li>text4</li>
        <li>text5</li>
        <li>text6</li>
        <li>text7</li>
        <li>text8</li>
        <li>text9</li>
        <li>text10</li>
      </ul>
    </div>
    <div className='23.2'>
      <table border={1} height={100} width={100}>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <div className='24.1'>
      result: {num1 ** num2}
    </div>
    <div className='24.2'>
      result: {name + ' ' + surname}
    </div>
    <div className='24.3'>
      result: {Math.sqrt(num)}
    </div>
    <div className='25'>
      {text1}
    </div>
    <div className='26'>
      {age}
    </div>
    <div className='27'>
      {p}
    </div>
    <div className='28'>
      {abc}
    </div>
    <div className='29'>
      {isAuth && <p>Вы авторизованы</p>}
    </div>
    <div className='30'>
      {!isAuth1 && <p>Вы не авторизованы</p>}
    </div>
    <div className='31'>
      {sum}
    </div>
    <div className='32'>
      {getDigitSum1(12345)}
    </div>
    <div className='33'>
      <button onClick={act1}>act1</button>
      <button onClick={act2}>act2</button>
    </div>
  </>
}
export default App;