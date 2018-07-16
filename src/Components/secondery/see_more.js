import React, {Component} from 'react'
import { getReq, postReq } from '../../services/httpsRequests'


class SeeMore extends Component {
  constructor(props) {
    super(props);
    this.gallery = this.props.gallery;
    this.username = this.props.username;

    this.state = {
      check: false,
      notPaid: false
    }
    this.seeMore = this.seeMore.bind(this);
    this.checkPaid = this.checkPaid.bind(this);
    this.save = this.save.bind(this);
    this.renderPurchase = this.renderForm.bind(this);
    this.renderUI   = this.renderUI.bind(this);
  }

  seeMore () {
    this.setState(prevState => ({
        notPaid: prevState.notPaid,
        check: true
    }))
    this.checkPaid();
  }

    checkPaid() {
        const params = new URLSearchParams(),
        url = 'https://museumisland45623.herokuapp.com/check_paid_galleries',
        self = this;
        params.append('username', this.username);
        params.append('gallery', this.gallery)
        postReq(url, params).then(dataObj => {
            if(dataObj) {
                const secUrl = 'https://museumisland45623.herokuapp.com/get_all_gallery_pictures/'+this.gallery;
                getReq(secUrl).then(data => {
                    if(data) {
                        this.props.onChange('update',data.pictures);
                        this.setState(prevState => ({
                            check: prevState.check,
                            notPaid: false
                        }))
                    }
                })
            } else {
                const galleryDetailsUrl = 'https://museumisland45623.herokuapp.com/get_gallery_details/' + this.gallery;
                getReq(galleryDetailsUrl).then(data => {
                    if(data) {
                        this.price = data.price;
                        this.genre = data.genre;
                        this.setState(prevState => ({
                            check: prevState.check,
                            notPaid: true
                        }))
                    }
                })
                
            }
        }).catch(err => {
            //think of an error
        })
    }

    save() {
        const url = 'https://museumisland45623.herokuapp.com/add_paid_gallery',
        params = new URLSearchParams();
        params.append('username',this.username);
        params.append('gallery',this.gallery);
        params.append('genre',this.genre);
        postReq(url,params).then(dataObj => {
            console.log(dataObj);
            if(dataObj) {
                this.checkPaid();
            } else {
                return;
            }
        });
    }

    renderForm() {
        if(this.state.notPaid) {
            return (
                <div>
                <button onClick={this.save}> pay now {this.price}$</button>
            </div>
            ) 
        } else {
            return (
                <div></div>
            )
        }
        }

    renderUI() {
        return (
            <div className='seeMore'>
            <button onClick={this.checkPaid} onClick={this.seeMore}>see more</button>
            </div>
        );
    }


    render() {
        return (
            this.state.check ? this.renderForm() : this.renderUI()
        )
    }
}
export default SeeMore