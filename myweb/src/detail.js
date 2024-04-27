import './main.css';
function Detail() {
    return (
        <>
            <div class="m-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">


                        <h2 class='pic'>StayEase</h2>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">

                            <div class="navbar-nav ms-auto">
                                <a class="nav-link" href="#r"><font color="white">Room Bookings</font>  </a>
                                <a href="/" className="btn btn-light ml-2">LOG OUT</a>
                            </div>
                        </div>

                    </div>

                </nav>
            </div>
            {/* <div class="my-1 px-2">
            <h2 class="fw-bold h-font text-center">Room Bookings</h2>
            </div> */}

<div id="r">
            <div class="container">
                <div class="row">


                    <div class="col-lg-9 col-md-12 px-4">
                        <div class="card mb-4 border-0 shadow" >
                            <div class="row g-0 p-3 align-items-center">
                                <div class="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                    <img src="/images/simple room.webp" class="img-fluid rounded" />
                                </div>
                                <div class="col-md-5 px-lg-1 px-md-1 px-0">
                                    <h5 class='mb-2'>SIMPLE ROOM</h5>
                                    <div class='feature mb-3 '>
                                        <h6 class="mb-1">Features</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Bathroom
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
                                        </span><span class="badge rounded-pill bg-light text-dark text-wrap">2 Sofa
                                        </span>
                                    </div>
                                    <div class='facilities mb-3 '>
                                        <h6 class="mb-1">Facilities</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
                                        </span>


                                    </div>
                                </div>
                                <div class="col-md-2 text-center mt-md-0 mt-4">
                                    <h6 class="mb-4"> ₹800 per night</h6>
                                    <a href='/roombooking' class='btn  btn-sm  w-100 btn-primary shadow-none'>Book Now</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 col-md-12 px-4">
                        <div class="card mb-4 border-0 shadow" >
                            <div class="row g-0 p-3 align-items-center">
                                <div class="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                    <img src="/images/non ac.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-md-5 px-lg-3 px-md-3 px-0">
                                    <h5 class='mb-2'>NON-AC ROOM</h5>
                                    <div class='feature mb-3 '>
                                        <h6 class="mb-1">Features</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Bathroom
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
                                        </span><span class="badge rounded-pill bg-light text-dark text-wrap">5 Sofa
                                        </span>
                                    </div>
                                    <div class='facilities mb-3 '>
                                        <h6 class="mb-1">Facilities</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
                                        </span>


                                    </div>
                                </div>
                                <div class="col-md-2 text-center mt-md-0 mt-4">
                                    <h6 class="mb-4"> ₹950 per night</h6>
                                    <a href='/roombooking' class='btn  btn-sm  w-100 btn-primary shadow-none'>Book Now</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 col-md-12 px-4">
                        <div class="card mb-4 border-0 shadow" >
                            <div class="row g-0 p-3 align-items-center">
                                <div class="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                    <img src="/images/Ac room.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-md-5 px-lg-3 px-md-3 px-0">
                                    <h5 class='mb-2'>AC ROOM</h5>
                                    <div class='feature mb-3 '>
                                        <h6 class="mb-1">Features</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Bathroom
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
                                        </span><span class="badge rounded-pill bg-light text-dark text-wrap">5 Sofa
                                        </span>
                                    </div>
                                    <div class='facilities mb-3 '>
                                        <h6 class="mb-1">Facilities</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
                                        </span>


                                    </div>
                                </div>
                                <div class="col-md-2  mt-md-0 mt-4 text-center">
                                    <h6 class="mb-4"> ₹1200 per night</h6>
                                    <a href='/roombooking' class='btn  btn-sm  w-100 btn-primary shadow-none'>Book Now</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 col-md-12 px-4">
                        <div class="card mb-4 border-0 shadow" >
                            <div class="row g-0 p-3 align-items-center">
                                <div class="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                    <img src="/images/superiorroom.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-md-5 px-lg-3 px-md-3 px-0">
                                    <h5 class='mb-2'>SUPERIOR ROOM</h5>
                                    <div class='feature mb-3 '>
                                        <h6 class="mb-1">Features</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">2 Bathroom
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
                                        </span><span class="badge rounded-pill bg-light text-dark text-wrap">5 Sofa
                                        </span>
                                    </div>
                                    <div class='facilities mb-3 '>
                                        <h6 class="mb-1">Facilities</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
                                        </span>


                                    </div>
                                </div>
                                <div class="col-md-2 text-center mt-md-0 mt-4">
                                    <h6 class="mb-4"> ₹2000 per night</h6>
                                    <a href='/roombooking' class='btn  btn-sm  w-100 btn-primary shadow-none'>Book Now</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 col-md-12 px-4">
                        <div class="card mb-4 border-0 shadow" >
                            <div class="row g-0 p-3 align-items-center">
                                <div class="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                    <img src="/images/deluxe room.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-md-5 px-lg-3 px-md-3 px-0">
                                    <h5 class='mb-2'>DELUXE ROOM</h5>
                                    <div class='feature mb-3 '>
                                        <h6 class="mb-1">Features</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Bathroom
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
                                        </span><span class="badge rounded-pill bg-light text-dark text-wrap">5 Sofa
                                        </span>
                                    </div>
                                    <div class='facilities mb-3 '>
                                        <h6 class="mb-1">Facilities</h6>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
                                        </span>
                                        <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
                                        </span>


                                    </div>
                                </div>
                                <div class="col-md-2  mt-md-0 mt-4  text-center">
                                    <h6 class="mb-4"> ₹3000 per night</h6>
                                    <a href='/roombooking' class='btn  btn-sm  w-100 btn-primary shadow-none'>Book Now</a>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            </div>







        </>
    )
}
export default Detail;