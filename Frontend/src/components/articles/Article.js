import React, {Component} from 'react';

class Article extends Component{
	
	archive = () => {
		this.props.archive(this.props.id);
	}

	delete = () => {
		this.props.delete(this.props.id);
	}

	formatDate = (date) => {
		return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
	}

	render(){

		const {title, description, date, content, author, archiveDate} = this.props.articleData;

		return(

			<div className="card mx-auto mb-3">

				<div className="card-header">
			  		<h3 className="card-title">{title}</h3>
			  		<h5 className="card-title sub">{description}</h5>
			 	</div>		
			  
			  	<div className="card-body">
			  		<label className="card-text text-start">{content}</label>
			  	</div>

			  	<ul className="list-group list-group-flush">
				    <li className=" list-pub list-group-item" style={{'fontSize': 12}}>Publicado el: {this.formatDate(date)}</li>	
				    <li className=" list-pub list-group-item" style={{'fontSize': 12}}>Autor: {author}</li>    
			  	</ul>

			  	<div className="card-footer">
			    { 
			    	archiveDate ? (

			    		<React.Fragment>
				    		<p className="card-text" style={{'fontSize': 12}}>Fecha de archivo: {this.formatDate(archiveDate)}</p>

						    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal">
						    	Eliminar
							</button>

							{/*Modal*/}
							<div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalDelete" aria-hidden="true">
							  <div className="modal-dialog modal-dialog-centered" role="document">
							    <div className="modal-content">
							      <div className="modal-body align-self-end">
							      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
							      </div>
							      <div className="modal-body">
							      <h5 className="modal-title" id="modalDelete">¿Seguro que quieres eliminar el artículo?</h5>
							        <button className="btn btn-danger mt-3 mb-4" data-dismiss="modal" onClick={this.delete}>Eliminar</button>
							      </div>
							    </div>
							  </div>
							</div>
						</React.Fragment>
					    	
				    ) : (

					   
					    <button className="btn btn-primary mb-2 mt-2" onClick={this.archive}>Archivar</button>

				)}
			     
			  </div>
			</div>

		);
	}
}

export default Article;