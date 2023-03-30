// import Logo from "./images/Bitcoin.png";

function App() {

  return (
    <div className="bg-red-100 min-h-screen">
      {/* 이렇게 작성하셔야 합니다. */}
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>pjy's Portfolio</div>
          {/* <div>
            <img className="w-12" src={Logo} alt="nb"/>
          </div> */}
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>

      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          여기에 나를 소개하는 내용을 적으면 됩니다.
        </div>
      </main>
    </div>
  );
}

export default App;
