const ScrollToTop = () => {
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn(200);
    } else {
        $(".scroll-to-top").fadeOut(200);
    }
  });

  const handleClick = () => {
    $("html, body").animate({scrollTop: 0}, 300);
  }
  
  return (
    <div className="scroll-to-top" onClick={handleClick}>
      <span className="scroll-icon">
        <i className="las la-arrow-up"></i>
      </span>
    </div>
  );
};

export default ScrollToTop;