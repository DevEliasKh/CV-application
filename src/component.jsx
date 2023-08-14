import { useState } from 'react';
import './component.css';
import './style/preview.css';
import './style/edit.css';

const userData = {
	fullname: '',
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
	end_sate_job: '',
	location_job: '',
	description: '',
};

function EditSideUI() {
	function SetInput(ID, type, placeholder) {
		const [value, setValue] = useState(null);
		return (
			<input
				type={type}
				id={ID}
				placeholder={placeholder}
				onChange={(e) => {
					setValue(e.target.value);
					value !== null && (userData[ID] = value);
				}}
			/>
		);
	}

	return (
		<>
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
				<input type="text" id="school" />
				<label htmlFor="degree">Degree</label>
				<input type="text" id="degree" />
				<div className="edit-date">
					<label htmlFor="start_date_edu">Start Date</label>
					<input type="date" id="start_date_edu" />
					<label htmlFor="end_date_edu">End Date</label>
					<input type="date" id="end_date_edu" />
				</div>
				<label htmlFor="location_edu">Location</label>
				<input type="text" id="location_edu" />
			</div>
			<div className="edit-experience">
				<h1>Professional Experience</h1>
				<label htmlFor="company">Company</label>
				<input type="text" id="company" />
				<label htmlFor="position">Position</label>
				<input type="text" id="position" />
				<div className="edit-date">
					<label htmlFor="start_date_job">Start Date</label>
					<input type="date" id="start_date_job" />
					<label htmlFor="end_date_job">End Date</label>
					<input type="date" id="end_date_job" />
				</div>
				<label htmlFor="location_job">Location</label>
				<input type="text" id="locatio_-job" />
				<label htmlFor="description">Description</label>
				<textarea id="description" cols="30" rows="10"></textarea>
				<label htmlFor=""></label>
			</div>
		</>
	);
}

function PreviewSideUI() {
	return (
		<div className="card">
			<div className="name">{userData.fullname}</div>
			<div className="contact">
				<span className="email">DevEliasKh@gmail.com</span>
				<span className="Phone">+989391066134</span>
				<span className="location">Mashhad, Iran</span>
			</div>
			<div className="education">
				<div className="header">Education</div>
				<div className="education-card">
					<div className="left">
						<div className="date">
							<div className="start-date">2015/06/301</div>
							<div className="end-date">2019/06/30</div>
						</div>
						<div className="location">Mashhad, Iran</div>
					</div>
					<div className="right">
						<div className="school">university</div>
						<div className="degree">Degree</div>
					</div>
				</div>
			</div>
			<div className="experience">
				<div className="header">Experience</div>
				<div className="experience-card">
					<div className="left">
						<div className="date">
							<div className="start-date">2015/06/301</div>
							<div className="end-date">2019/06/30</div>
						</div>
						<div className="location">Mashhad, Iran</div>
					</div>
					<div className="right">
						<div className="company">Apple</div>
						<div className="position">Front-end Developer</div>
						<div className="description">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod incidunt,
							ratione, maiores tempore alias voluptates
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function MakeUi() {
	return (
		<div className="container">
			<div className="edit-side">
				<EditSideUI />
			</div>
			<div className="preview-side">
				<PreviewSideUI />
			</div>
		</div>
	);
}

export default MakeUi;
