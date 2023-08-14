import PreviewSideUI from './component/preview';
import EditSideUI from './component/edit';
import './component.css';

function MakeUi() {
	return (
		<div className="container">
			<div className="edit-side">
				<EditSideUI />
			</div>
			<div className="preview-side">
				<h1>Preview</h1>
				<PreviewSideUI />
			</div>
		</div>
	);
}

export default MakeUi;
