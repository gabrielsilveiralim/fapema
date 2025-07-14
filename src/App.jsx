import './App.css'

export default function App() {
  return (
    <>

      <div className='flex items-center justify-center mx-auto text-center font-bold max-w-xs sm:max-w-sm md:max-w-3xl mt-8 mb-2 '>
        <h1 className='text-2xl text-black w-full  sm:text-2xl md:text-2xl'>Denuncie casos de bullying de forma anônima e segura</h1>
      </div>

      <div className='flex items-center justify-center mx-auto font-bold'>
        <h1 className='text-black text-xl sm:text-2xl md:text-2xl'>Sua voz<span className='text-roxo'> importa</span></h1>
      </div>

      <div className='flex flex-col justify-center  mx-auto max-w-sm my-8'>
        <label htmlFor="Nome" className='text-sm font-bold  mb-1.5'>Nome</label>
        <input type="text" placeholder='Nome completo' className='bg-zinc-100 border-1 border-b-gray-400 rounded-sm w-full p-2' />
      </div>

      <div className='flex flex-col justify-center  mx-auto max-w-sm -mt-3 mb-3'>
        <label htmlFor="Email" className='text-sm font-bold  mb-1.5'>Email</label>
        <input type="email" placeholder='Digite seu email' className='bg-zinc-100 border-1 border-b-gray-400 rounded-sm w-full p-2' />
      </div>

      
      <p className='flex justify-center items-center text-sm sm:text-base md:text-lg '>Deseja fazer a denúncia de forma anônima?</p>
      
      <div className='flex justify-center items-center gap-8 '>

        <div>
          <label htmlFor="Sim" className='text-sm sm:text-base md:text-lg'>Sim</label>
          <input type="checkbox" name="sim" id="" className='cursor-pointer'/>
        </div>
       
        <div>
          <label htmlFor="Não" className='text-sm sm:text-base md:text-lg'>Não</label>
          <input type="checkbox" name="não" id="" className='cursor-pointer' />
        </div>
        
      </div>

      <div className='flex justify-center items-center text-xl font-bold'>
        <h3>Informações sobre o Bullying</h3>
      </div>
      



    </>
  )
}