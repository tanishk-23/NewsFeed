import React, { Component } from 'react'
import moment from 'moment'
export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,Url,date}=this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://static.toiimg.com/photo/86551618.cms": imageUrl} width={150} height={300} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{!description?"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo":description}...</p>
                        <p className="card-text"><small className="text-muted">on {moment(date).format("DD-MM-YYYY")}</small></p>
                        <a href={Url} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
