import React, { useState } from "react";

const Bookform = () => {

    const [bookdata, setBookdata] = useState({
        name : "",
        email : "",
        phone: "",
        date : "",
        time : "",
        person : "",
    });

    let name,value;
    const postUserData = (event) => {
         name = event.target.name;
         value = event.target.value;

         setBookdata({...bookdata, [name]: value});
    };

    const submitData = async (event) => {
        event.preventDefault();

        const{name,email, phone, date, time, person} = bookdata;

        if(name && email &&  phone &&  date &&  time &&  person){

            const bookuser = fetch(
                'https://reactbookingdata-default-rtdb.firebaseio.com/bookingformdata.json',
                {
                    method :"POST",
                    Headers: {
                        "content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        name,email, phone, date, time, person
                    }),
                }  
           );
    
           if (bookuser) {

            setBookdata ({
                name : "",
                email : "",
                phone: "",
                date : "",
                time : "",
                person : "",
            });
    
                alert("Table Is Book Sucessfully");
           }else{
                alert('Table Is Not Booked ! Try Again !');
           }

        }
        else
        {
            alert('Please Fill Form Data ');
       }

       
       
    };

    return(
        <>

            <div className="container-fluid book-form-main">
                <div className="container book--form-container">
                    <div className="book-form-bg">
                        <div className="row">
                            <div className="col-12 col-lg-6 ms-auto book-form-col">
                                <div className="book-form">
                                    <h2 className="form-title">book a table</h2>
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6">
                                                <div className="book-form-input">
                                                    <label >Name</label>
                                                    <input type="text" id="name" placeholder="Name" name="name"  value={bookdata.name} onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="book-form-input">
                                                    <label >email</label>
                                                    <input type="email" id="email" placeholder="Email" name="email" value={bookdata.email} onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="book-form-input">
                                                    <label >phone</label>
                                                    <input type="phone" id="phone" placeholder="Phone" name="phone" value={bookdata.phone} onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="book-form-input">
                                                    <label >select date</label>
                                                    <input type="date" id="date" name="date" value={bookdata.date} onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="book-form-input">
                                                    <label >Booking Time</label>
                                                    <input type="text" id="time" placeholder="Enter Time " name="time" value={bookdata.time} onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="book-form-input">
                                                    <label >Person</label>
                                                    <input type="text" id="person" placeholder="Person on Table" name="person" value={bookdata.person} onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="book-form-btn" onClick={submitData}>confirm</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Bookform;