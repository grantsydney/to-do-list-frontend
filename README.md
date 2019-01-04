<Form.Input width={6} placeholder="Color?" name="color" value={this.state.color} />


//take out list details when clicked

<div id="detail-container">
   {this.props.clickedListId ? <h1 className="list-details-title-text">{this.props.renderList.name}</h1>
  //<EditableTitleLabel
  //           clickedListId={this.props.clickedListId}
  //           id={this.props.clickedListId}
  //           key={this.props.id}
  //           text={this.props.renderList.name}
  //           labelClassName='myLabelClass'
  //           inputClassName='myInputClass'
  //           inputWidth='200px'
  //           inputHeight='25px'
  //           inputMaxLength='50'
  //           labelFontWeight='bold'
  //           inputFontWeight='bold'
  //           onFocus={this._handleFocus}
  //           onFocusOut={this._handleFocusOut}
  //       />
     : null}

     <ul>{this.props.clickedListId ? this.props.renderList.items.map(i=>
       // <li key={i.id}>{i.name}</li>
       <div key={i.id}>
         <span className="list-details-items-text">
           <li><EditableItemLabel
                   item={i}
                   clickedListId={this.props.clickedListId}
                   id={i.id}
                   text={i.name}
                   labelClassName='myLabelClass'
                   inputClassName='myInputClass'
                   inputWidth='200px'
                   inputHeight='25px'
                   inputMaxLength='50'
                   labelFontWeight='bold'
                   inputFontWeight='bold'
                   onFocus={this._handleFocus}
                   onFocusOut={this._handleFocusOut}
               /></li>
           </span>
           <span data-id={i.id} onClick={this.deleteItem}>
             X
           </span>
           <div><br/></div>
         </div>

     ) : null}</ul>

     ////////



  setting state for completed item

  // handleCompletedItem = (id) => {
  //   event.target.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.style.textDecoration = "line-through"
  //   const newData = this.state.lists.map( list => {
  //     list.items.map(listItem => {
  //       if (listItem.id === id) {
  //         return {...list,}
  //       }
  //     })
  //
  //     // if (l.id === id)  {
  //     //   return {...l, completed:!l.completed}
  //     // } return l
  //
  //
  //   })
  //
  //   this.setState({ lists: newData })
  // }

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
