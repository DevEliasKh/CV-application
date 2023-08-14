import '../style/edit.css';

function EditSideUI() {
	return (
		<>
			<div className="general-info">
				<h1>Personal Information</h1>
				<label htmlFor="fullname">FullName</label>
				<input type="text" id="fullname" value={'Elias Khodaparast'} />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" value={'DevEliasKh@gamil.com'} />
				<label htmlFor="phone">Phone Number</label>
				<input type="tel" id="phone" value={'+989391066134'} />
				<label htmlFor="address">Address</label>
				<input type="text" id="address" value={'Mashhad, Iran'} />
			</div>
			<div className="edit-education">
				<h1>Education</h1>
				<label htmlFor="school">School</label>
				<input type="text" id="school" value={''} />
				<label htmlFor="degree">Degree</label>
				<input type="text" id="degree" value={''} />
				<div className="edit-date">
					<label htmlFor="start-date">Start Date</label>
					<input type="date" id="start-date" />
					<label htmlFor="end-date">End Date</label>
					<input type="date" id="end-date" />
				</div>
				<label htmlFor="location">Location</label>
				<input type="text" id="location" />
			</div>
			<div className="edit-experience">
				<h1>Professional Experience</h1>
				<label htmlFor="company">Company</label>
				<input type="text" id="company" />
				<label htmlFor="position">Position</label>
				<input type="text" id="position" />
				<div className="edit-date">
					<label htmlFor="start-date-job">Start Date</label>
					<input type="date" id="start-date-job" />
					<label htmlFor="end-date-job">End Date</label>
					<input type="date" id="end-date-job" />
				</div>
				<label htmlFor="location-job">Location</label>
				<input type="text" id="location-job" />
				<label htmlFor="description">Description</label>
				<textarea id="description" cols="30" rows="10"></textarea>
				<label htmlFor=""></label>
			</div>
		</>
	);
}

export default EditSideUI;
