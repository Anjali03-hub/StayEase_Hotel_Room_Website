import './admin.css';
function Admin()
{
    return(
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
                                <a class="nav-link" href="/reguser"><font color="white">View User</font>  </a>
                                <a class="nav-link" href="/viewbooking"><font color="white">View Bookings</font>  </a>
                                <a class="nav-link" href="/viewcontact"><font color="white">Contact Detail</font>  </a>
                                <a href="/admin" className="btn btn-light ml-2">LOG OUT</a>
                            </div>
                        </div>

                    </div>

                </nav>
            </div>
        </>
    )
   
}
export default Admin;
