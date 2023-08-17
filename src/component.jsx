import { useState } from 'react';
import './component.css';
import './style/preview.css';
import './style/edit.css';

function UI() {
	// const userData = {
	// 	fullname: 'Elias Khodaparast',
	// 	email: '',
	// 	phone: '',
	// 	address: '',
	// 	school: '',
	// 	degree: '',
	// 	start_data_edu: '',
	// 	end_date_edu: '',
	// 	location_edu: '',
	// 	company: '',
	// 	position: '',
	// 	start_date_job: '',
	// 	end_sate_job: '',
	// 	location_job: '',
	// 	description: '',
	// };

	const [user, setUser] = useState({
		fullname: 'Elias Khodaparast',
		email: '',
		phone: '',
		address: '',
		school: '',
		degree: '',
		start_data_edu: '',
		end_date_edu: '',
		location_edu: '',
		company: '',
		position: '',
		start_date_job: '',
		end_date_job: '',
		location_job: '',
		// description: '',
	});
	function SetInput(ID, type, placeholder) {
		const updateUser = (e) => {
			const { id, value } = e.target;
			console.log(e.target.id);
			setUser((prevUser) => ({ ...prevUser, [e.target.id]: value }));
		};
		// console.log(user);
		return (
			<input type={type} id={ID} placeholder={placeholder} onChange={updateUser} />
		);
	}

	return (
		<div className="container">
			<div className="edit-side">
				<div className="general-info">
					<h1>Personal Information</h1>
					<label htmlFor="fullname">FullName</label>
					{SetInput('fullname', 'text', 'Elias Khodaparast Barkook')}
					<label htmlFor="email">Email</label>
					{SetInput('email', 'email', 'DevEliasKh@gamil.com')}
					<label htmlFor="phone">Phone Number</label>
					{SetInput('phone', 'tel', '+989391066134')}
					<label htmlFor="address">Address</label>
					{SetInput('address', 'text', 'Mashhad, Iran')}
				</div>
				<div className="edit-education">
					<h1>Education</h1>
					<label htmlFor="school">School</label>
					{SetInput('school', 'text')}
					<label htmlFor="degree">Degree</label>
					{SetInput('degree', 'text')}
					<div className="edit-date">
						<label htmlFor="start_date_edu">Start Date</label>
						{SetInput('start_date_edu', 'date')}
						<label htmlFor="end_date_edu">End Date</label>
						{SetInput('end_date_edu', 'date')}
					</div>
					<label htmlFor="location_edu">Location</label>
					{SetInput('location_edu', 'text')}
				</div>
				<div className="edit-experience">
					<h1>Professional Experience</h1>
					<label htmlFor="company">Company</label>
					{SetInput('company', 'text')}
					<label htmlFor="position">Position</label>
					{SetInput('position', 'text')}
					<div className="edit-date">
						<label htmlFor="start_date_job">Start Date</label>
						{SetInput('start_date_job', 'date')}
						<label htmlFor="end_date_job">End Date</label>
						{SetInput('end_date_job', 'date')}
					</div>
					<label htmlFor="location_job">Location</label>
					{SetInput('location_job', 'text')}
					{/* <label htmlFor="description">Description</label> */}
					{/* <textarea id="description" cols="30" rows="10"></textarea> */}
				</div>
			</div>
			<div className="preview-side">
				<div className="card">
					<div className="name">{user.fullname}</div>
					<div className="contact">
						<span className="email">{user.email}</span>
						<span className="Phone">{user.phone}</span>
						<span className="location">{user.address}</span>
					</div>
					<div className="education">
						<div className="header">Education</div>
						<div className="education-card">
							<div className="left">
								<div className="date">
									<div className="start-date">{user.start_date_edu}</div>
									<div className="end-date">{user.end_date_edu}</div>
								</div>
								<div className="location">{user.location_edu}</div>
							</div>
							<div className="right">
								<div className="school">{user.school}</div>
								<div className="degree">{user.degree}</div>
							</div>
						</div>
					</div>
					<div className="experience">
						<div className="header">Experience</div>
						<div className="experience-card">
							<div className="left">
								<div className="date">
									<div className="start-date">{user.start_date_job}</div>
									<div className="end-date">{user.end_date_job}</div>
								</div>
								<div className="location">{user.location_job}</div>
							</div>
							<div className="right">
								<div className="company">{user.company}</div>
								<div className="position">{user.position}</div>
								{/* <div className="description">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
									incidunt, ratione, maiores tempore alias voluptates
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function MakeUi() {
	return <UI />;
}

export default MakeUi;
