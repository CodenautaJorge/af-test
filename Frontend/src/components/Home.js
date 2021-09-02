import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import Global from '../Global';

class Home extends Component{

	url = Global.url;

	//Referencia de los datos del formulario:
	titleRef = React.createRef();
	descriptionRef = React.createRef();
	contentRef = React.createRef();
	authorRef = React.createRef();

	state = {

		article : {},
		status : null,
		redirect : false
	};

	changeState = () => {

		this.setState({

			article : {

				title: this.titleRef.current.value,
				description: this.descriptionRef.current.value,
				content: this.contentRef.current.value,
				author: this.authorRef.current.value
			}
		});

	}

	/*
		
		Recogemos los datos del formulario

	*/

	receiveData = (e) =>{

		//Evitamos que al recibir los datos se recargue la pantalla:
		e.preventDefault();  

		this.changeState();

		//Petición http por POST para guardar el artículo:
		axios.post(this.url + 'save', this.state.article).then(res => {
				
				this.setState({
					article: res.data.articleStored,
					status: 'success',
					redirect: true
					
				});	

				//console.log(res.data);
	
		});

	}


	render(){

		//Si almacenamos los datos redireccionamos a publicaciones:
		const { redirect } = this.state;

		if(redirect){
			return <Redirect to="new" />;
		}

		return(

			<div className="nueva-publicacion">

				<div id="formulario" className="card mx-auto mb-3 mt-3" style={{ width: '30em'}}>
				  <div id="card-header" className="card-header text-light">
				  	<h4>Publicar un nuevo artículo</h4>
				  </div>

				  <div className="card-body">
				    
				  	<form onSubmit={this.receiveData}>

				  		<div className="mb-3">
				  			<label>Título</label>
				  			<input className="form-control" type="text" id="title" name="title" ref={this.titleRef} onChange={this.changeState} required/>
				  			
				  		</div>

				  		<div className="mb-3">
				  			<label>Descripción</label>
				  			<input className="form-control" type="text" id="description" name="description" ref={this.descriptionRef} onChange={this.changeState} required/>
				  		</div>

				  		<div className="mb-3">
				  			<label>Contenido</label>
				  			<textarea className="form-control" ref={this.contentRef} onChange={this.fileChange} rows="6" cols="30" required/>
				  		</div>

				  		<div className="mb-3">
				  			<label>Autor</label>
				  			<input className="form-control" type="text" id="author" name="author" ref={this.authorRef} onChange={this.changeState} required/>
				  		</div>

				  		<div className="mb-3">
				  			<input className="form-control btn btn-primary" type="submit" id="publish" value="Publicar" />
				  		</div>

				  	</form>

				  </div>
				</div>
			</div>

		);
	}

}

export default Home;