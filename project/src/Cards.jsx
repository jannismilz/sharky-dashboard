export function EventCard({
  title,
  loction,
  date,
  fromtime,
  totime,
  age,
  descripton,
  img,
}) {
  return (
    <Card title={title} subtitle={`${loction} · ${date} · ${fromtime} - ${totime} · ${age}`} description={descripton} backgroundImage={img} />
  )
}

export function SuppotCard({
  title,
  school,
  theme,
  year,
  descripton,
  img,
}) {
  return (
    <Card title={title} subtitle={`${year}. Lehrjahr · ${school} · ${theme}`} description={descripton} backgroundImage={img} />
  )
}

function Card({
  title,
  subtitle,
  description,
  backgroundImage,
}) {
  return (
    <div class={`bg-gray-200 rounded-b-2xl rounded-t-4xl shadow-xl w-80 h-40 bg-[url(${backgroundImage})] bg-top bg-cover my-5`} >
      <div class='bg-white rounded-t-2xl border-gray-200 border-1 px-5 py-2 h-14'>
        <h4 class='font-bold text-md'>{title}</h4>
        <h5 class='text-xs'>{subtitle}</h5>
      </div>
      <p class='bg-[url(./assets/grandient-axpo.png)] opacity-80 py-2 h-26 px-5 font-semibold text-sm text-white rounded-b-2xl z-50'>{description}</p>
    </div >
  )
}
