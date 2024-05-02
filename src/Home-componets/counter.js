import React, {useState} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Conternumber = () => {

    const [counteron, setCounteron] = useState(false);

    return(
        <>
        <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
            <div className="container-fluid counter-bg p-0">
                <div className="counter_overlay">
                    <div className="container counter-container">
                        <div className="row counter-row">
                            <div className="col-12 col-md-6 col-lg-3 counter-col-1">
                                <div className="counter-item">
                                    <div className="counter-text">
                                        <h2 className="counter-number"> 
                                            {counteron && <CountUp start={100} end={8500} duration={5} delay={0}/>}
                                        </h2>
                                        <span className="cunter-icon"> <i className="fa-solid fa-user"></i> </span>
                                    </div>
                                    <p className="cunter-title">customer serve</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 counter-col-2">
                                <div className="counter-item">
                                    <div className="counter-text">
                                        <h2 className="counter-number"> 
                                        {counteron &&<CountUp start={0} end={120} duration={5} delay={0}/>}
                                        </h2>
                                        <span className="cunter-icon"> <i className="fa-regular fa-chess-queen"></i></span>
                                    </div>
                                    <p className="cunter-title">experience chef</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 counter-col-3">
                                <div className="counter-item">
                                    <div className="counter-text">
                                        <h2 className="counter-number"> 
                                        {counteron &&<CountUp start={100} end={72000} duration={5} delay={0}/>}
                                        </h2>
                                        <span className="cunter-icon"><i className="fa-solid fa-users"></i></span>
                                    </div>
                                    <p className="cunter-title">happy customer</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 counter-col-4">
                                <div className="counter-item">
                                    <div className="counter-text">
                                        <h2 className="counter-number"> 
                                        {counteron &&<CountUp start={0} end={50} duration={5} delay={0}/>}
                                        </h2>
                                        <span className="cunter-icon"> <i className="fa-solid fa-trophy"></i> </span>
                                    </div>
                                    <p className="cunter-title">winning award</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ScrollTrigger>
            
        </>
    );
}

export default Conternumber;