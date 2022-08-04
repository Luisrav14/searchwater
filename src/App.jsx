//

export const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 navbar-light bg-light border border-bottom-3 shadow shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder text-primary" href="#">
            SEARCHWATER
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Acerca de
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>

      <header className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-black mb-2">Utiliza la IA para encontrar el vital líquido</h1>
                <p className="lead fw-normal text-black-50 mb-4">
                  Con <strong>SEARCHWATER</strong> utilizamos drones programados con inteligencia artificial para detectar potenciales cuerpos de agua potable.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">
                    Saber más
                  </a>
                  <a className="btn btn-outline-primary btn-lg px-4" href="#!">
                    Servicios
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img className="img-fluid rounded-3 my-5 shadow shadow-lg" src="https://images.unsplash.com/photo-1519852476561-ec618b0183ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80" alt="..." />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
