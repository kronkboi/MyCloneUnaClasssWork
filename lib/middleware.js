


const flashMiddleware = (req, res, next) => {
    // if there's a flash message, transfer
    // it to the context, then clear it
    res.locals.flash = req.session.flash
    delete req.session.flash
    next()
}



const getNewsData = () => [
    {
      heading: 'Covid is Cured',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      Auther: 'Una L\'Estrange'
    },
    {
        heading: 'Covid is still here',
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        Auther: 'Una again',

    }  
  ]
  
  const newsMiddleware = (req, res, next) => {
    if(!res.locals.partials) res.locals.partials = {}
    res.locals.partials.newsContext = getNewsData()
    next()
  }


  //  The below gave an error "the path argument must be of type string received type object"
  // const testMiddleware = (req,res, next) => {
    
  //     if(!res.locals.layout) res.locals.layout = {}
  //     res.locals.layout.newsContext = "blah blah blah"
  //     next()
  //   }
  
  
//  const news = "blah blah blah";
//  const testMiddleware = (req,res, next) => {
//       if(!res.locals.layout) res.locals.layout = {}
//       res.locals.layout.newsContext = news;
//       next()
//     }

const getNews = () => { return "blah blah blah"}


 const testMiddleware = (req, res, next) => {
      if(!res.locals.layoutContext) res.locals.layoutContext = {}
      res.locals.layoutContext = getNews();
      next()
    }



module.exports = { flashMiddleware: flashMiddleware, newsMiddleware: newsMiddleware , testMiddleware}


