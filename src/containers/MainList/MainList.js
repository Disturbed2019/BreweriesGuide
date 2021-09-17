import React, {Component,Fragment} from "react";
import './MainList.scss'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchBreweries, searchBreweries} from "../../store/actions/breweriesList";
import BrewerieItem from "../BrewerrieItem/BrewerieItem";

class MainList extends Component{

    renderBreweries() {
      return  this.props.breweries.breweries.map((item ) => {
            return <BrewerieItem
                breweries = {item}
                key={item.id}
            />
        })
    }



    componentDidMount() {
        this.props.fetchBreweries()
    }


    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" className={'input'}/>
                    <button onClick={this.props.searchBreweries}>search</button>
                    <button onClick={this.props.fetchBreweries}>Reset</button>
                </div>


            <div className={'MainList'}>
                <h1 className={'MainList__title'}>Breweries List</h1>
                <div className="MainList__inner">
                    {
                        this.props.breweries.loading
                        ? <Loader />
                        : <Fragment>
                                {this.renderBreweries()}
                        </Fragment>
                    }
                </div>
            </div>
            </Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        breweries: state.breweries,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBreweries: () => dispatch(fetchBreweries()),
        searchBreweries: () => dispatch(searchBreweries())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainList)