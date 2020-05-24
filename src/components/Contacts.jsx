import React from "react";
import './Contacts.scss';

import Contact from './Contact';

class Contacts extends React.Component {
	
	constructor(props) {
		super(props);

		this.tableHeader = {
			avatar: null,
			name: "Nome",
			phone: "Telefone",
			country: "País",
			admissionDate: "Admissão",
			company: "Empresa",
			department: "Departamento",
		};
	}

	render() {
		const contacts = this.props.data;
		return (
			<div data-testid="contacts" className="container">
				<section className="contacts">
					<Contact data={this.tableHeader} />
					{contacts && contacts.map((contact, i) => (
						<Contact data={contact} key={i} />
					))}
				</section>
			</div>
		);
	}
}

export default Contacts;
