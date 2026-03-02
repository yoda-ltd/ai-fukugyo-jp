export default function AffiliateCTA({ text, href = '#', sub }: { text: string; href?: string; sub?: string }) {
  return (
    <div className="my-8 p-6 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
      <a href={href} target="_blank" rel="noopener noreferrer sponsored"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
        {text}
      </a>
      {sub && <p className="text-xs text-gray-500 mt-2">{sub}</p>}
    </div>
  )
}
