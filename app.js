const App = () => {
    return React.createElement(
      "div",
      { className: "app-container" },
     
        React.createElement("h1", {}, ""),
      [
        
        {

          image:
            "https://m.media-amazon.com/images/M/MV5BMTM3MzY2MDYwOF5BMl5BanBnXkFtZTcwODQ3MDA0Nw@@._V1_.jpg",
          name: "Kate Beckinsale",
          Study: "French and Russian Literature",
          hobby: "theater, dancing",
        },
        {
          image:
            "https://yt3.ggpht.com/1qwv3D_Q-taogErjMjeicbrKjL7kGJhBXDnsbY7ZMGsaJS88xW2aIqtyqDpUNxZWvYnfdp8R=s900-c-k-c0x00ffffff-no-rj",
          name: "nancy ajram",
          Study: " music  ",
          hobby: "Swimming, Cooking",
        },
        
        
      ].map((prod) =>
        React.createElement(Product, {
          image: prod.image,
          name: prod.name,
          Study: prod.Study,
          hobby: prod.hobby,
      
        })
      )
    );
  };
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));