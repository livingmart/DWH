import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// About
const About = React.lazy(() => import("./components/pages/About"));
// Services
const Services = React.lazy(() => import("./components/pages/Services"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));
// Pages
const Whyus = React.lazy(() => import("./components/pages/Whyus"));
const Team = React.lazy(() => import("./components/pages/Team"));
const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
const Portfoliogrid = React.lazy(() => import("./components/pages/Portfoliogrid"));
const Portfolioslider = React.lazy(() => import("./components/pages/Portfolioslider"));
const Portfoliomasonry = React.lazy(() => import("./components/pages/Portfoliomasonry"));
const Portfoliodetails = React.lazy(() => import("./components/pages/Portfoliodetails"));
const Faqs = React.lazy(() => import("./components/pages/Faqs"));
// N
const Blogstandard = React.lazy(() => import("./components/pages/Blogstandard"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
// Contact
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Requestform = React.lazy(() => import("./components/pages/Request"));
// Shop
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Shop = React.lazy(() => import("./components/pages/Shop"));
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopdetails = React.lazy(() => import("./components/pages/Shopdetails"));



// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router basename={'/templatemonster/react/protekt'}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          {/* Home */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home-v2" component={Hometwo} />
          {/* About */}
          <Route exact path="/about" component={About} />
          {/* Services */}
          <Route exact path="/services" component={Services} />
          <Route exact path="/service-details" component={Servicedetails} />
          {/* Pages */}
          <Route exact path="/whyus" component={Whyus} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/team-details/:id" component={props => (<Teamdetails {...props} key={window.location.pathname} />)} />
          <Route exact path="/portfolio-grid" component={Portfoliogrid} />
          <Route exact path="/portfolio-slider" component={Portfolioslider} />
          <Route exact path="/portfolio-masonry" component={Portfoliomasonry} />
          <Route exact path="/portfolio-details/:id" component={props => (<Portfoliodetails {...props} key={window.location.pathname} />)} />
          <Route exact path="/faqs" component={Faqs} />
          {/* News */}
          <Route exact path="/blog/search/:query" component={props => (<Blogstandard {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/cat/:catId" component={props => (<Blogstandard {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/user/:userId" component={props => (<Blogstandard {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/tag/:tagId" component={props => (<Blogstandard {...props} key={window.location.pathname} />)} />

          <Route exact path="/blog-standard" component={Blogstandard} />
          <Route exact path="/blog-grid" component={Bloggrid} />
          <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
          {/* Contact */}
          <Route exact path="/contact" component={Contact} />
          {/* Shop */}
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shop/search/:query" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/cat/:catId" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/tag/:tagId" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/minPrice=:minPrice&maxPrice=:maxPrice" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop-left" component={Shopleft} />
          <Route exact path="/shop-details/:id" component={props => (<Shopdetails {...props} key={window.location.pathname} />)} />
          <Route exact path="/requestform" component={props => (<Requestform {...props} key={window.location.pathname} />)} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
