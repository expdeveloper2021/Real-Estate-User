import React, { Component } from 'react'
import NavBar from '../../Components/Navbar';
import firebase from '../../Config/Fire'
import './All.css'
import contact from '../../Images/Contact.jpg'
import contact2 from '../../Images/Contact2.jpg'
import contact3 from '../../Images/Contact3.jpg'
import Footer from '../Footer/Footer';

class All extends Component {
    constructor() {
        super()
        this.state = {
            allData: [],
            condit: false,
            active: "active",
            active1: "",
            selected: "For Sale"
        }
    }

    componentDidMount() {
        this.setState({ allData: [], active: "active", active1: "", condit: true })
        firebase.database().ref("allProperties/For Sale").on("child_added", (data) => {
            let allData = this.state.allData
            let arr = []
            arr.push(data.val())
            allData.push(arr)
            this.setState({ allData, condit: false, selected: "For Sale" })
        })
    }

    sale() {
        this.setState({ allData: [], active: "active", active1: "", condit: true })
        setTimeout(() => {
            firebase.database().ref("allProperties/For Sale").on("child_added", (data) => {
                let allData = this.state.allData
                let arr = []
                arr.push(data.val())
                allData.push(arr)
                this.setState({ allData, condit: false, selected: "For Sale" })
            })
        }, 3000);
    }

    rent() {
        this.setState({ allData: [], active: "", active1: "active", condit: true })
        setTimeout(() => {
            firebase.database().ref("allProperties/Rent").on("child_added", (data) => {
                let allData = this.state.allData
                let arr = []
                arr.push(data.val())
                allData.push(arr)
                this.setState({ allData, condit: false, selected: "Rent" })
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                <NavBar />
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" id="uniq" style={{ width: "20%", margin: "0px auto" }}>
                        <div className="item active">
                            <img src={contact} alt="Contact" />
                        </div>
                        <div className="item">
                            <img src={contact2} alt="Contact" />
                        </div>
                        <div className="item">
                            <img src={contact3} alt="Contact" />
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="delete">
                    <h1>Properties</h1>
                    <ul className="nav nav-tabs">
                        <li className={this.state.active} onClick={this.sale.bind(this)}><a href="Javascript:void(0)">Sale</a></li>
                        <li className={this.state.active1} onClick={this.rent.bind(this)}><a href="Javascript:void(0)">Rent</a></li>
                    </ul>
                    {!!this.state.condit && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
                    <div className="main" >
                        {!!this.state.allData.length && this.state.allData.map((e) => {
                            return e.map((f) => {
                                return <div className="card" key={Math.random()}>
                                    <h3><b>{f.title}</b></h3>
                                    <p style={{ marginLeft: "10px" }}>{f.address}</p>
                                    <div id={f.push} className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target={"#" + f.push} data-slide-to="0" className="active"></li>
                                            <li data-target={"#" + f.push} data-slide-to="1"></li>
                                            <li data-target={"#" + f.push} data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src={f.images[0]} alt="Los Angeles" style={{ width: "100%" }} />
                                            </div>
                                            {f.images.map((e, i) => {
                                                return i !== 0 && <div className="item" key={Math.random(36)}>
                                                    <img src={e} alt="Los Angeles" style={{ width: "100%" }} />
                                                </div>
                                            })}
                                        </div>
                                        <a className="left carousel-control" href={"#" + f.push} data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href={"#" + f.push} data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <p className="price">PKR <b style={{ fontSize: "25px" }}>{f.demand}</b></p>
                                    <hr />
                                    <h4><b>Details & Description</b></h4>
                                    <p style={{ whiteSpace: "pre-line", marginLeft: "10px" }}>{f.detail}</p>
                                    <hr />
                                    <h4><b>Contact</b></h4>
                                    <p style={{ marginLeft: "10px" }}>{f.phone}</p>
                                </div>
                            })
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default All
