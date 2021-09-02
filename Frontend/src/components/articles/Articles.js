import React, {Component} from 'react';
import axios from 'axios';
import Article from './Article';
import Global from '../../Global';


class Articles extends Component{

	url = Global.url;

	state = {

		articles : [],
		status: null

	};

	componentWillMount(){
		if(this.props.isArchived){
			this.getArchived();
		}else{
			this.getArticles();
		}	
	}

	/*
		Función para obtener los artículos no archivados
	*/

	getArticles = () => {
		axios.get(this.url + "articles").then(res => {

			this.setState({
				articles: res.data.articles,
				status: 'success'
			})

		});

	}

	/*
		Función para archivar un artículo por su id
	*/

	archiveArticle = (id) => {

		const idArticle = this.state.articles[id]._id;

		axios.put(this.url + "article-archive/" + idArticle).then(res => {

			this.getArticles();

		});	

	}

	/*
		Función para obtener los artículos archivados
	*/

	getArchived = () => {
		axios.get(this.url + "archived").then(res => {

			this.setState({
				articles: res.data.articles,
				status: 'success'
			})

		});

	}

	/*
		Función para eliminar el artículo por su id
	*/

	deleteArticle = (id) => {

		const idArticle = this.state.articles[id]._id;

		axios.delete(this.url + "article-delete/" + idArticle).then(res => {

			this.getArchived();

		});	

	}

	render(){

		const archived = this.props.isArchived;

		return(

			<div className="publicaciones">

					<br/><br/>
					<div className="container">
					
					  { this.state.articles.length > 0 ? (

							this.state.articles.map((article, i) =>{

						  		return(

							  		<div className="row" key={i}>
							  			<div className="col">

							  				
							  				{ archived ? (

							  					<Article 

									  			id = {i}
									  			articleData = {article}
									  			delete = {this.deleteArticle}
									  				
								  				/>

							  				):(

							  					<Article 

									  			id = {i}
									  			articleData = {article}
									  			archive = {this.archiveArticle}
									  				
								  				/>


							  				)}
									  			

								  		</div>
							  		</div>

						  		);
						  	})

						) : (

							<h3>No hay artículos que mostrar</h3>

						)}
					  
			  		</div>		
			</div>

		);
	}
}

export default Articles;