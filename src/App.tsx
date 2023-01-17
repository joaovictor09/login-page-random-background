import { useState } from "react"
import { Code } from "phosphor-react"

function App() {
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    
    <div className="w-full h-screen relative overflow-clip">
      <img src="https://picsum.photos/1920/1080.webp?blur=2&grayscale" onLoad={() => setLoadingImage(false)} className={`w-screen bg-center absolute ${loadingImage ? 'invisible' : 'visible'}`} alt="" />
      
      <div className="relative z-10 h-screen flex flex-col">

        <header className="p-5 text-red-500 flex items-center gap-2">
          <Code size={32} weight="bold"/>
          <span className="font-bold">joaovictor09</span>
        </header>
        <div className="w-full h-full grid grid-cols-2">
          <div></div>
          <div className="w-full flex items-center justify-center">
            <div className="p-9 bg-zinc-700 rounded-lg flex flex-col gap-5">
              <h1 className="text-white font-bold">Fazer login em sua conta</h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label 
                    htmlFor="email" 
                    className="text-zinc-300 font-light text-sm"
                  >
                    E-mail
                  </label>

                  <input 
                    id="email" 
                    type="text" 
                    className="w-80 py-3 px-2 bg-transparent border border-zinc-400 rounded-lg text-white placeholder:text-zinc-400 placeholder:font-light"
                    placeholder="Insira seu e-mail aqui"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label 
                    htmlFor="password" 
                    className="text-zinc-300 font-light text-sm"
                  >
                    Senha
                  </label>
                  <input 
                    id="password" 
                    type="password"
                    className="w-80 py-3 px-2 bg-transparent border border-zinc-400 rounded-lg text-white placeholder:text-zinc-400 placeholder:font-light"
                    placeholder="Insira sua senha aqui"
                  />
                </div>
              </div>

              <button className="w-full bg-red-500 rounded text-white font-bold py-2 hover:bg-red-600 transition-colors">
                Logar
              </button>
            </div>
          </div>
        </div>
        <footer className="p-5 bg-zinc-700 flex text-white font-light text-sm gap-10 bg-opacity-90">
          <span>&#169; 2022-2023 joaovictor09</span>

          <div className="flex gap-5 underline">
            <a href="">Segurança</a>
            <a href="">Privacidade</a>
            <a href="">Termos de uso</a>
          </div>
        </footer>
      </div>

      </div>
  )
}

export default App
