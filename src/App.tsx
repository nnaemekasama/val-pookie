import { useState } from "react"

const content = [
  "are you sure?",
  "nah",
  "uhmmm",
  "maybe",
  "oya",
  "hmmmmmmmmmmmm",
  "okay okay okay",
]

function App() {
  const [size, setSize] = useState(16)
  const [yes, setYes] = useState(false)
  const [currIndex, setCurrIndex] = useState(0)

  const changeContent = () => {
    setSize(size * 1.2)

    const nextIndex = (currIndex + 1) % content.length
    setCurrIndex(nextIndex)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-20">
      {yes ? (
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"></img>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          ></img>
          <h1 className="text-4xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center">
            {" "}
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              style={{
                fontSize: size,
              }}
              onClick={() => setYes(true)}
            >
              Yes
            </button>
            <button
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={changeContent}
            >
              {content[currIndex]}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
