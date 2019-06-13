import React from "react";

const Footer = () => {
    return (
        <footer id="sticky-footer" className="py-4 bg-primary text-white-50" style={footerStyle} >
            <div className="container text-center">
      <small>My_Project_Planner Copyright &copy;2019</small>
    </div>
  </footer>
    );
};

export default Footer;

var footerStyle={
    position:'fixed',
    bottom:0,
    width:'100%'
}
