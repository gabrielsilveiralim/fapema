import './App.css'

export default function App() {
  return (
    <>

      <div className='flex items-center justify-center -mt-12 -ml-78 sm:-mt-6 z-10'>
        <div className='w-40 h-40 bg-roxo sm:w-50 sm:h-50 md:w-60 md:h-60 rounded-full'></div>
      </div>

      <div className='flex items-center justify-center mx-auto text-center font-bold max-w-xs sm:max-w-sm sm:-mt-25 md:-mt-25 md:max-w-3xl -mt-16  mb-2 '>
        <h1 className='text-2xl text-black w-full  sm:text-2xl md:text-2xl'>Denuncie casos de bullying de forma anônima e segura</h1>
      </div>

      <div className='flex items-center justify-center mx-auto font-bold'>
        <h1 className='text-black text-xl sm:text-2xl md:text-2xl'>Sua voz<span className='text-roxo'> importa</span></h1>
      </div>

      <div className='flex flex-col justify-center  mx-auto max-w-sm my-8'>
        <label htmlFor="Nome" className='text-sm font-bold  mb-1.5'>Nome</label>
        <input type="text" placeholder='Nome completo' className='bg-zinc-50 border-1 border-b-gray-400 rounded-sm w-full p-2' />
      </div>

      <div className='flex flex-col justify-center  mx-auto max-w-sm -mt-3 mb-3'>
        <label htmlFor="Email" className='text-sm font-bold  mb-1.5'>Email</label>
        <input type="email" placeholder='Digite seu email' className='bg-zinc-50 border-1 border-b-gray-400 rounded-sm w-full p-2' />
      </div>

      <p className='flex justify-center items-center text-sm sm:text-base md:text-lg mt-5'>Deseja fazer a denúncia de forma anônima?</p>

     
      <div className='flex items-center justify-center ml-55'>
        <div className='w-0 h-0 border-t-[100px] border-b-[100px] border-r-[300px] sm:border-t-[130px] sm:border-b-[130px] sm:border-r-[400px] md:border-t-[130px] md:border-b-[130px] md:border-r-[400px] border-t-transparent border-b-transparent border-r-orange-300'>
        </div>
      </div>

      <div className='flex justify-center items-center gap-8 -mt-46 sm:-mt-63   '>
        <div>
          <label htmlFor="Sim" className='text-sm sm:text-base md:text-lg'>Sim</label>
          <input type="checkbox" name="sim" id="" className='cursor-pointer' />
        </div>

        <div>
          <label htmlFor="Não" className='text-sm sm:text-base md:text-lg'>Não</label>
          <input type="checkbox" name="não" id="" className='cursor-pointer' />
        </div>
      </div>

      <div className='flex justify-center items-center text-xl font-bold mt-4 mb-2'>
        <h3>Informações sobre o Bullying</h3>
      </div>

      <div className='flex flex-col justify-center  mx-auto max-w-sm h-52 mt-3 mb-3'>
        <label htmlFor="descrição">Descrição do ocorrido</label>
        <input type="text" name="text" id="" placeholder='Descrição do fato' className='h-full max-h-40 bg-zinc-50 border-1 border-b-gray-400 rounded-sm p-2' />
      </div>

      <div className='flex justify-center items-center text-xl font-bold mt-4 mb-2'>
        <h3>Tipo de Bullying:</h3>
      </div>

      <div className='flex flex-col items-center justify-center'>

        <div className='flex items-center justify-center'>
          <input type="checkbox" />
          <label htmlFor="fisico">Físico(agressão, empurroções, etc...)</label>
        </div>

        <div className='flex items-center justify-center'>
          <input type="checkbox" />
          <label htmlFor="">Verbal(xingamentos, insultodos, etc...)</label>
        </div>

        <div className='flex items-center justify-center'>
          <input type="checkbox" />
          <label htmlFor="">Cyberbullying(mensagens ofensivas, exposição, etc...)</label>
        </div>

        <div className='flex items-center justify-center'>
          <input type="checkbox" />
          <label htmlFor="">Exclusão social(exclusão de grupos, isolamento, etc...)</label>
        </div>

      </div>

      <div className='flex justify-center items-center text-xl font-bold mt-4 mb-2'>
        <h3>Informações sobre o(s) Envolvido(s)</h3>
      </div>

      <div className='flex flex-col justify-center  mx-auto max-w-sm my-8'>
        <label htmlFor="Nome" className='text-sm font-bold  mb-1.5'>Quem praticou o bullying?</label>
        <input type="text" className='bg-zinc-50 border-1 border-b-gray-400 rounded-sm w-full p-2' />
      </div>

      <div className='flex items-center justify-center -ml-78 sm:-mt-6 md:-mt-6'>
        <div className='w-50 h-50 bg-blue-400 sm:w-60 sm:h-60 md:w-60 md:h-60 rounded-full'></div>
      </div>

      <p className='flex justify-center items-center text-sm sm:text-base md:text-lg -mt-55'>Acontece com frequência?</p>

      <div className='flex justify-center items-center gap-8 mt-1 mb-4'>
        <div>
          <label htmlFor="Sim" className='text-sm sm:text-base md:text-lg'>Sim</label>
          <input type="checkbox" name="sim" id="" className='cursor-pointer' />
        </div>

        <div>
          <label htmlFor="Não" className='text-sm sm:text-base md:text-lg'>Não</label>
          <input type="checkbox" name="não" id="" className='cursor-pointer' />
        </div>
      </div>

      <p className='flex justify-center items-center text-sm sm:text-base md:text-lg mt-2 -z-2'>Já denunciou antes?</p>

      <div className='flex justify-center items-center gap-8 '>
        <div>
          <label htmlFor="Sim" className='text-sm sm:text-base md:text-lg'>Sim</label>
          <input type="checkbox" name="sim" id="" className='cursor-pointer' />
        </div>
        <div>
          <label htmlFor="Não" className='text-sm sm:text-base md:text-lg'>Não</label>
          <input type="checkbox" name="não" id="" className='cursor-pointer' />
        </div>
      </div>

      <div className='flex flex-col justify-center  mx-auto max-w-sm my-8'>
        <label htmlFor="Nome" className='text-sm font-bold mb-1.5'>Local onde aconteceu?</label>
        <input type="text" className='bg-zinc-50 border-1 border-b-gray-400 rounded-sm w-full p-2' />
      </div>

      <div className="flex items-center justify-center w-full">
        <label for="dropzone-file" className="flex flex-col items-center justify-center w-96 h-52 border-1 bg-zinc-50  border-b-gray-100 border-dashed rounded-lg cursor-pointer hover:bg-gray-200 duration-400 ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique para carregar o arquivo</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (max. 10MB)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

    </>
  )
}