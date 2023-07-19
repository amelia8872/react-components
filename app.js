// TODO
// Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseOver() {
    this.setState({
      hover: true
    });
  }

  onMouseOut() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onMouseOver={() => this.onMouseOver()}
        onMouseOut={() => this.onMouseOut()}
        onClick={() => this.onListItemClick()}
      >
        {this.props.item}
      </li>
    );
  }
}

var GroceryListItems = (props) => (
  <ul>
    {props.items.map((item, index) => (
      <GroceryListItem key={index} item={item} />
    ))}
  </ul>
);

var GroceryList = () => {
  return (
    <div>
      <h2>My Grocery List</h2>
      <GroceryListItems items={['cucumber', 'kale']} />
    </div>
  );
};

ReactDOM.render(<GroceryList />, document.getElementById('app'));

