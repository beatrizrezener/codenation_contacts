import React from 'react';

import './Filters.scss';
import { FiltersType } from '../constants';

class Filters extends React.Component {

	constructor() {
		super();

		this.state = { 
			active: undefined,
			searchInputValue: '',
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		this.setState({ searchInputValue: value, active: undefined  }, this.props.onPressSearch(value));
	}

	handleSearch() {
		this.props.onPressSearch(this.state.searchInputValue);
	}

	handleSort(selectedFilter) {
		return () => { this.setState({ active: selectedFilter }, this.props.onPressFilter(selectedFilter)) };
	}

	getFilterClass(filterType) {
		return this.state.active === filterType ? 'is-selected' : null;
	}

	renderButton(text, filterType) {
		return (
			<button className={"filters__item " + this.getFilterClass(filterType)} onClick={this.handleSort(filterType)}>
				{text} <i className="fas fa-sort-down" />
			</button>
		);
	}

	render() {
		const buttons = [
			{label: 'Nome', filterType: FiltersType.Name },
			{label: 'País', filterType: FiltersType.Country },
			{label: 'Data de admissão', filterType: FiltersType.AdmissionDate },
			{label: 'Empresa', filterType: FiltersType.Company },
			{label: 'Departamento', filterType: FiltersType.Department },
		];
		return (
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar por nome" value={this.state.searchInputValue} onChange={this.handleChange} />

					<button className="filters__search__icon" onClick={this.handleSearch}>
						<i className="fa fa-search"/>
					</button>
					</div>
					{buttons.map(button => this.renderButton(button.label, button.filterType))}
				</section>
			</div>
		);
	}
}

export default Filters;
