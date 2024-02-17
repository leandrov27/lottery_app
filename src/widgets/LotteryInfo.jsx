const LotteryInfo = () => {
  return (
    <div className="lottery-wrapper style--two">
      <div className="action-header">
        <div className="left">
          <ul>
            <li>
              <a href="#0">
                NÚMEROS DE LA SUERTE: <strong>325</strong>
              </a>
            </li>
            <li>
              <a href="#0">
                NÚMEROS RESTANTES <strong>21</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <i className="las la-clock"></i>
              <div className="clock2" data-clock="2023/06/12"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LotteryInfo;
