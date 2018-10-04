var Search = (props) => (
  <form onSubmit = {props.formHandler}>
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={props.textFormState} onChange={props.handleTextChange}/>
      <input type="submit" value="Submit" />
    </div>
  </form>

);

/* <button className="btn hidden-sm-down">
<span className="glyphicon glyphicon-search"></span>
</button> */

// var Search = (props) => (
//   <form onSubmit = {props.formHandler}>
//     <div className="search-bar form-inline">
//       <input className="form-control" type="text" value={props.textFormState} onChange={props.handleTextChange}/>
//       <button className="btn hidden-sm-down">
//         <span className="glyphicon glyphicon-search"></span>
//       </button>
//     </div>
//   </form>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

//onClick={(e) => props.onItemClick(props.video)}