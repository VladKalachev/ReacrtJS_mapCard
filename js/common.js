
/*Вывод значения в строку из импута*/

/*const TodoApp = React.createClass({

  getInitialState: function() {
    return { text: ''};
  },

  handleChange: function (e) {
    this.setState({text: e.target.value});
  },

  render: function() {
    return (
      <div>
        <h1>Ввелидет текст </h1>
        <input type="text"  onChange={this.handleChange}/>
        <div >Text {this.state.text}</div>
      </div>
      );
  }
});*/


/*массив с данными*/
const HOTELS = [
    {
        id: 1,
        name: 'Beautiful, best located apartment!',

    },
    {
        id: 2,
        name: 'Fantastic view in a superlocation',

    },
    {
        id: 3,
        name: 'Nice and central in Berlin',

    },
    {
        id: 4,
        name: 'living at checkpoint charlie',
      
    }
];

/*const TodoInput = React.createClass({
  
  getInitialState: function() {
    return {items: [], text: ''};
  },

  onClick: function (e){
    e.preventDefault();
    this.setState({text: e.target.value});
    console.log(e.target.value);
  },

  render: function() {
    return (
      <form onClick={this.onItemSubmit}>
        <label>
          Text:
          <input type="text" name="name" onChange={this.onClick}/>
        </label>
        
        <input type="submit" value="Submit"  />
      </form>
      );
  }
});*/

const TodoCart = React.createClass({

   getInitialState() {
        return {
            visibl: true
        };
  },

  onCl: function(){
    console.log(111);
    this.setState({
      visibl: false
    });
  },

  render: function () {
    return (
      <div className={this.state.visibl ? '' : 'none'}>
      
      <div className="dell"> {this.props.name}</div>
       
        <button className="btnAdd" onClick={this.onCl} >Dell</button>

      </div>
    );
  }
});

const TodoApp = React.createClass({

    /*состяоние по умолчания*/
  getInitialState() {
    return {
        displayedHotels: HOTELS,
        text: ''
    };
  },

  onChange: function (e) {
    
    this.setState({
      text: e.target.value
    });

    console.log(e.target.value);
  },

  onForm: function (e) {

    e.preventDefault();

    var nextItems = this.state.displayedHotels.concat([{name: this.state.text}]);
    var nextText = '';
    this.setState({displayedHotels: nextItems, text: nextText});
    console.log(nextItems);
  },


  render: function() {

    var photos = this.state.displayedHotels.map(function(photo, key, id) {
      return <li><TodoCart key={key.toString()} name={photo.name} id={photo.id}  /></li>
    });

    return (
      <div>      
        <h1>TODO List</h1>
          <form onSubmit={this.onForm}>
            <input onChange={this.onChange} value={this.state.text} />
            <button className="btnAdd">Add</button>
          </form>
          <div><ul>{photos}</ul></div>

      </div>
      );
  }
});


ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);

