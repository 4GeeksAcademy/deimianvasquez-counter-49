import { useState, useEffect } from "react"
import SecondsCounter from "../components/SecondsCounter"

const Home = () => {
    const [counter, setCounter] = useState(0)
    const [stop, setStop] = useState(false)

    const stopCounter = () => {
        setStop((prev) => !stop)
    }


    useEffect(() => {
        if (stop) return
        const intervalId = setInterval(() => {
            setCounter((counterPrev) => counterPrev + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [counter, stop])

    return (
        <SecondsCounter
            digOne={counter / 1}
            digTwo={counter / 10}
            digThree={counter / 100}
            digFour={counter / 1000}
            digFive={counter / 10000}
            digSix={counter / 100000}
            seconds={counter}
            stopCounter={stopCounter}
        />
    )
}

export default Home