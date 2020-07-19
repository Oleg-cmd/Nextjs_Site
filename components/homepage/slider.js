const Slider = () => (
    <div className="container-fluid slider">
    <div id="Slider" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#Slider" data-slide-to="0" className="active"></li>
        <li data-target="#Slider" data-slide-to="1"></li>
        <li data-target="#Slider" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">

        <div className="carousel-item active img-div">
          <img className="d-block img-fluid img-s" src="../static/img/example.webp" alt=""/>
        </div>

        <div className="carousel-item img-div">
          <img className="d-block img-fluid img-s" src="../static/img/example.webp" alt=""/>
        </div>

        <div className="carousel-item img-div">
          <img className="d-block img-fluid img-s" src="../static/img/example.webp" alt=""/>
        </div>
      </div>
      <a className="carousel-control-next" href="#Slider" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <a className="carousel-control-prev" href="#Slider" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
     </div>
    </div>
)
export default Slider