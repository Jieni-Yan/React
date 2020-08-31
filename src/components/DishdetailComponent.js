import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardHeader} from 'reactstrap';


    function RenderDish({dish}) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        if(comments != null){
            const com = comments.map((comment) => {
                return (
                    <div key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
                    </div>
                );
            });
            return (
                <div className="container">
                    <div className="row">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">{com}</ul>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        const dish = props.selectedDish;
        if(dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {/* {this.renderDish(dish)} */}
                            <RenderDish dish= {dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {/* {this.renderComments(dish.comments)} */}
                            <RenderComments comments={dish.comments} />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }
        
        
    

export default DishDetail;