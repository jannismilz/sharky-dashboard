import sharkyLogo from './assets/sharky.png'
import expandedLogo from './assets/arrow-down.svg'
import { SharkyPieChart } from './Charts.jsx'

function FilterLabel({ name }) {
  return (
    <div class='mr-2 bg-gray-200 rounded-full w-28 h-7 flex justify-center items-center'>
      <div>
        {name}
      </div>
    </div>
  )
}

function HeaderSection({ title, labelNames }) {
  return (
    <div>
      <header class='flex items-center'>
        <img src={expandedLogo} />
        <h3 class='font-bold text-lg'>{title}</h3>
      </header>

      <ul class='flex my-2'>
        {
          labelNames.map(labelName => (
            <FilterLabel name={labelName} />
          ))
        }
      </ul>
    </div>
  )
}

function App() {

  return (
    <>
      <div class='px-60 py-10'>
        <header className='flex items-center'>
          <img src={sharkyLogo} class='h-10' alt='Sharky Logo' />
          <h1 class='mx-5'>Sharky - Admin Panel</h1>
        </header>

        <h2 class='font-bold text-xl py-10'>Dashboard</h2>

        <section>

          <HeaderSection title='Wie geht es den Lernenden?' labelNames={['Beruf', 'Standort', 'Lehrjahr']} />

          <SharkyPieChart />

        </section>

        <section>

          <HeaderSection title='Hilfe Aktivitäten' labelNames={['Beruf', 'Fach', 'Standort', 'Lehrjahr']} />

        </section>

        <section>

          <HeaderSection title='Events' labelNames={['Beruf', 'Alte', 'Von', 'Bis']} />

        </section>
      </div>
    </>
  )
}

export default App
