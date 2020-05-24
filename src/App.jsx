import React from 'react';
import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import ContactService from './service';
import FilterUtil from './filterUtil';

class App extends React.Component {

  constructor() {
    super();

    this.contacts = [];
    this.ascOrder = true;
    this.filterType = undefined;

    this.state = {
      filteredContacts: [],
      loading: true,
    }

    this.onPressFilter = this.onPressFilter.bind(this);
    this.onPressSearch = this.onPressSearch.bind(this);
  }

  componentDidMount() {
    ContactService.requestContacts(data => {
      this.contacts = data;
      this.setState({ filteredContacts: data, loading: false })
    });
  }

  onPressFilter(filterType) {
    if (filterType === this.filterType) {
      this.toggleOrder();
    } else {
      this.filterType = filterType;
    }
    this.setState({ filteredContacts: FilterUtil.sortByParam(this.state.filteredContacts, filterType, this.ascOrder) });
  }

  toggleOrder() {
    this.ascOrder = !this.ascOrder;
  }

  onPressSearch(str) {
    this.setState({ filteredContacts: FilterUtil.filterByParam(this.contacts, 'name', str) });
  }

  renderLoading() {
    return <h3 className="container">Carregando...</h3>;
  }

  render() {
    return (
      <React.Fragment>
        <div className="app" data-testid="app">
          <Topbar />
          <Filters onPressSearch={this.onPressSearch} onPressFilter={this.onPressFilter} />
          { this.state.loading ? this.renderLoading() : <Contacts data={this.state.filteredContacts} /> }
        </div>
      </React.Fragment>
    )
  }
}

export default App;
