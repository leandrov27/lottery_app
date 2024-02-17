const PickNumberModal = () => {
  return (
    <div className="modal fade" id="pickNumberModal" tabIndex="1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="account-form-area">
              <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
                <i className="las la-times"></i>
              </button>

              <h3 className="title">ASIGNAR NÚMERO</h3>

              <div className="account-form-wrapper">
                <form>
                  <div className="form-group">
                    <label>
                      Nombre <sup>*</sup>
                    </label>
                    
                    <input type="text" name="name" id="name" placeholder="Leandro Valdez"/>
                  </div>

                  <div className="form-group">
                    <label>
                      GRILLA <sup>*</sup>
                    </label>

                    <input type="text" name="grid" id="grid" placeholder="3"/>
                  </div>

                  <div className="form-group">
                    <label>
                      Número <sup>*</sup>
                    </label>

                    <input type="number" name="number" id="number" placeholder="453"/>
                  </div>

                  <div className="form-group text-center mt-5">
                    <button className="cmn-btn">GUARDAR</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickNumberModal;
