import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { actions } from 'react-redux-form';
import { addComment,fetchDishes } from '../redux/ActionCreators';



import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';

 /* MainComponent.js will be connected to the configureStore.js using connect state to props method
 App.js contains the <provider> wrapper  and calls the configurestore() 
 Reducer.js is to get the new state from initial state and action */

 const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }   ;     
};

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});



/* as we used redux and Connected to */
class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }

    render() {

      const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
  
      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
              addComment={this.props.addComment}
            />
        );
      };
      
          return (
            <div>
              <Header />
              <div>
              <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
              </div>
              <Footer />
            </div>
          );
        }
    }

/* connection 
The connect() function takes two optional arguments:
– mapStateToProps(): called every time store state changes.
Returns an object full of data with each field being a prop
for the wrapped component
– mapDispatchToProps(): receives the dispatch() method and
should return an object full of functions that use dispatch()
*/
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
