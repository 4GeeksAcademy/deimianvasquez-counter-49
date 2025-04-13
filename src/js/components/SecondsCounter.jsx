const SecondsCounter = (props) => {

    const {
        digOne,
        digTwo,
        digThree,
        digFour,
        digFive,
        digSix,
        stopCounter
    } = props

    return (
        // <h1>SecondsCounter {seconds}</h1>
        <div className="container-fluid">
            <div className="row">
                <div
                    className="col-12 d-flex justify-content-between bg-dark text-light counter-numbers px-5 "
                >
                    <div><i className="far fa-clock"></i></div>
                    <div>{Math.floor(digSix % 10)}</div>
                    <div>{Math.floor(digFive % 10)}</div>
                    <div>{Math.floor(digFour % 10)}</div>
                    <div>{Math.floor(digThree % 10)}</div>
                    <div>{Math.floor(digTwo % 10)}</div>
                    <div>{digOne % 10}</div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <button onClick={() => stopCounter()} className="btn btn-secondary"> Stop</button>
                </div>
            </div>
        </div>
    )
}

export default SecondsCounter;