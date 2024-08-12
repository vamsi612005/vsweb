import '../css/NavBar.css'

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-sticky-top bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto"> 
        <a class="button" href="#">Home</a>
        <a class="button" href="#">Product</a>
        <a class="button" href="#">Our Team</a>
        <a class="button" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}