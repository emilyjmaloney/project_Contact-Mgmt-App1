import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(
		store.contacts[props.match.params.bubu].full_name ? store.contacts[props.match.params.bubu].full_name : ""
	);
	const [address, setAddress] = useState(
		store.contacts[props.match.params.bubu].address ? store.contacts[props.match.params.bubu].address : ""
	);
	const [email, setEmail] = useState(
		store.contacts[props.match.params.bubu].email ? store.contacts[props.match.params.bubu].email : ""
	);
	const [phone, setPhone] = useState(
		store.contacts[props.match.params.bubu].phone ? store.contacts[props.match.params.bubu].phone : ""
	);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={event => setName(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={event => setEmail(event.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={event => setPhone(event.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={event => setAddress(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
						/>
					</div>
					<button
						onClick={() =>
							actions.editContact(name, email, address, phone, store.contacts[props.match.params.bubu].id)
						}
						type="button"
						className="btn btn-primary form-control">
						Update
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						click here to see your updated contact
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
