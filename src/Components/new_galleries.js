import React, {
  Component
} from 'react'



class newGalleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGalleries: []
    }
    this.add = this.add.bind(this)
    this.nextID = this.nextID.bind(this)
  }

  add(gallerie) {
    this.setState(prevState => ({
      newGalleries: [
        ...prevState.newGalleries,
        {
          id: this.nextID(),
          gallery_name: gallerie.gallery_name,
          picture: gallerie.picture,
        }
      ]
    }))
  }

  nextID() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  componentDidMount() {
    const url =
      "https://museumisland45623.herokuapp.com/get_galleries";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var self = this;
        if(data.err) {

        } else {
          const dataObj = data.docs;
          dataObj.map((gallerie) => {
            console.log(gallerie);
            self.add(gallerie);
            return true;
          });
        }
      })
  }

  eachGallerie(gallerie, i) {
    // return ( 
    //   <div className = "card" style = {{width: 18 + 'rem'}}>
    //       <Galleries key = {'gallerie' + i} index = {i}>
    //         <div className='GallerieCont'>
    //           <a style="background:"></a>
    //           <p> 
    //             <b>gallery_name:</b > {book.author} 
    //           </p> 
    //         </div>
    //       </Galleries > 
    //   </div >
    // )
  }

  render() {
    return ( 
      <div className = "cont" > 
        {/* { this.state.newGalleries.map(this.eachGallerie) }  */}
      </div >
    )
  }
}

export default newGalleries