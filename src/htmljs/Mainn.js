import {motion} from 'framer-motion';
import '../css/Mainn.css'
import ResponsiveImage from './ResponsiveImage';
import vamsi from '../img/blue/vamsi-f.png'
import vamsis from '../img/blue/vamsi_final.png'
import subramanyam from '../img/blue/subramanyam-f.png'
import subramanyams from '../img/blue/subramanyam_final.png'
import harsha from '../img/blue/harsha-f.png'
import harshas from '../img/blue/harsha_final.png'
import lalitesh from '../img/blue/lalitesh-f.png'
import laliteshs from '../img/blue/lalitesh_final.png'
import pranav from '../img/blue/pranav-f.png'
import pranavs from '../img/blue/pranav_final.png'
import { hover } from '@testing-library/user-event/dist/hover';

export default function Mainn(){
    return(
        <>

        <nav class="navbar navbar-expand-lg navbar-sticky-top bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand purplec" href="#"><h4><strong>Vital Stats</strong></h4></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navb">
              <a class="button homeb" href="#home">Home</a>
              <a class="button" href="#features">Features</a>
              <a class="button" href="#team">Team</a>
              <a class="button" href="#contact">Contact</a>
              </div>
            <div class="navbar-nav ms-auto"> 
              <a class="button stylebp" href="#">Get Started</a>
            </div>
            </div>
            </div>
        </nav>



            <div id="home" class="first-div">
              <div class="logo-bg">

              </div>
              <div class="grid-1">
                <h1 class="marh1">Revolutionizing Healthcare with <br/>Seamless Patient Data Management</h1>
                <p class="marp">Unlock premium access by helping us improve:</p>
                <a href="https://forms.gle/JeDNrFGrJrBY1v9T6" class="form-but">Click-here!</a>
              </div>
            </div>

            <div id="features" class="features-head">
                <h1>Our Features</h1>
            </div>

            <div class="second-div">
                <div class="cell-1">
                  <h3>Report Generation</h3>
                  <p>AI-driven recommendations for nutrition, fitness, <br/>and lifestyle based on individual health data and goals.</p>
                </div>
                <div class="cell-2">
                  <h3>Real-Time Health Updates</h3>
                  <p>Notifications and real-time updates about health status and critical changes, with options for alerts and reminders.</p>
                </div>
                <div class="cell-3">
                  <h3>Personalized Health Insights</h3>
                  <p>Organize reports, prescriptions, and scans efficiently for easy access.</p>
                </div>
                <div class="cell-4">
                  <h3>Personalized diet and <br/>lifestyle recomendations</h3>
                  <p>Personalized diet and lifestyle recommendations tailored to individual needs and goals for optimal health.</p>
                </div>
                <div class="cell-5">
                  <h3>Integrated Health Risk Assessments</h3>
                  <p>Tools for assessing health risks and generating actionable insights, integrated with AI for personalized feedback.</p>
                </div>
                <div class="cell-6">
                  <h3>Data Storage and Fast Retrieval</h3>
                  <p>Efficiently store and retrieve patient data with lightning-fast speed.</p>
                </div>
            </div>

            <div id="team" class="third-div">
                <h1>Our Team</h1>
            <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="ricomp">
                  <ResponsiveImage class="d-block w-100" srcLarge={harsha} srcSmall={harshas} alt="1"/>
                </div> 
                <div class="carousel-caption d-none d-md-block">
                  <h5>Harsha Vardhan</h5>
                  <p>Founder and Director</p>
                </div>
              </div>
              <div class="carousel-item">
              <ResponsiveImage class="d-block w-100" srcLarge={vamsi} srcSmall={vamsis} alt="2"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Ponnuri Vamsi</h5>
                  <p>Director and CTO</p>
                </div>
              </div>
              <div class="carousel-item">
              <ResponsiveImage class="d-block w-100" srcLarge={lalitesh} srcSmall={laliteshs} alt="3"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Lalitesh M</h5>
                  <p>COO</p>
                </div>
              </div>
              <div class="carousel-item">
              <ResponsiveImage class="d-block w-100" srcLarge={subramanyam} srcSmall={subramanyams} alt="4"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Subramanyam</h5>
                  <p>Administration and Relations Manager</p>
                </div>
              </div>
              <div class="carousel-item">
              <ResponsiveImage class="d-block w-100" srcLarge={pranav} srcSmall={pranavs} alt="5"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Pranav M</h5>
                  <p>Marketing</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>

            <div class="join">
              <div class="main-title">
              <h1>Join our team</h1>
              <h3>We're excited to announce internship opportunities for talented individuals to join our team!</h3>
              </div>
              <div class="rolesp">
                <h4>Available roles:</h4>
                <p>- React Native App Developers (Interns)</p>
                <p>- Web Developers (Interns)</p>
              </div>
              <p>Want to take part: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdm37jFgsUYI7T6vehAHZZPJ267g7xUH3-86iik8CU43_z_BA/viewform">Apply here</a></p>
            </div>

            <div id="contact" class="last-div">
            <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h2>Contact Us</h2>
                <p>Connect with us to give insights, grievancies, or to work with us. </p>
              </div>
              <div class="col-md-6">
                <form>
                  <div class="mb-3">
                    <label for="name" pattern="[a-zA-Z]+"class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn">Submit</button>
                </form>
              </div>
            </div>
            </div>
            <hr class="my-hr"/>
            <div class="footer">
                <p>VITAL HEALTH SOLUTION PVT. LTD. ©</p>
            </div>
            </div>

            
        </>
    )
}