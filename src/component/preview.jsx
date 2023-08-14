import '/home/elias/Coding/repos/CV-app/src/style/preview.css';

function PutValue(ID, className) {
	// const inputValue = document.querySelector(`#${ID}`);
	// console.log(inputValue.value);
	return <div className={className}>inputValue</div>;
}

function PreviewSideUI() {
	return (
		<div className="card">
			{PutValue('fullname', 'name')}
			{/* <div className="name">Elias Khodaparast</div> */}
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

export default PreviewSideUI;
