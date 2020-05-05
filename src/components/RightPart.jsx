import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'


export default class RightPart extends Component {
  

    state = {
        selectedState: {},
         data: [{
            country: 'Portugal',
            label: [{ id: 0, value: "Aasiya Jayavant" }, { id: 1, value: "Luvleen Lawrence" }, { id: 2, value: "Rey Mibourne" }, { id: 3, value: "Cayla Brister" }]
        },
        {
            country: 'Nicaragua',
            label: [{ id: 0, value: "Deveedaas Nandi" }, { id: 1, value: "Obasey Chidy" }, { id: 2, value: "Xenie Dolezelova" }, { id: 3, value: "Ezequiel Dengra" }]
        },
        {
            country: 'Marshall Islands',
            label: [{ id: 0, value: "Aaron Almaraz" }, { id: 1, value: "Jelena Denisova" }]
        }
    ]
    }

    render() {

        return ( <div >
            <Container >
            <Row >
            <Col > {
                this.state.data ?
                this.state.data.map((obj, index) => {
                        return ( <>
                                <h5> { obj.country } </h5> 
                                {
                                obj.label.map((lab, labIndex) => {
                                    return ( 
                                    <>
                                        <input type = "checkbox"
                                        value = { lab.value }
                                        onChange = {
                                            (e) => {
                                                const country = this.state.selectedState;
                                                country[obj.country] = this.state.selectedState[obj.country] || [];
                                                var index = country[obj.country].indexOf(lab.value);
                                                if(!!~country[obj.country].indexOf(lab.value)){
                                                    country[obj.country].splice(index, 1);
                                                }else{
                                                    country[obj.country].push(lab.value)  
                                                }
                                                this.setState({selectedState: country});
                                            }
                                        }
                                        /><label> { lab.value } </label><br />  
                                    </>
                                    )
                                })
                            }
                        </>
                    )
                }):
            null
        }
        </Col>
    
        <Col >

            {this.state.selectedState.Portugal 
            ? 
                <div>
                    {this.state.selectedState.Portugal.length > 0 ? <h5>Portugal</h5> : null}
                    {this.state.selectedState.Portugal.map((val,idx) => {
                        return(
                            <Alert key={idx} variant={"danger"}>
                                    {val}
                                    <button type="button" className="close" 
                                        onClick={(e)=> 
                                            {
                                                const values =  this.state.selectedState.Portugal;
                                                const index = values.indexOf(val);
                                                if(index > -1) {
                                                    values.splice(index,1)
                                                }
                                                const state = this.state.selectedState;
                                                state['Portugal'] = values;
                                                this.setState({ selectedState : state})
                                            }
                                        }
                                    >
                                        <span aria-hidden="true">×</span><span className="sr-only">Close alert</span>
                                    </button>
                            </Alert>)})
                    }
                </div>
            : 
            null}

            {this.state.selectedState.Nicaragua 
            ? 
                <div>
                    {this.state.selectedState.Nicaragua.length > 0 ? <h5>Nicaragua</h5> : null}
                    {this.state.selectedState.Nicaragua.map((val, idx) => {
                        return(
                            <Alert key={idx} variant={"danger"}>
                                {val}
                                <button type="button" className="close"
                                 onClick={(e)=> 
                                    {
                                        const values =  this.state.selectedState.Nicaragua;
                                        const index = values.indexOf(val);
                                        if(index > -1) {
                                            values.splice(index,1)
                                        }
                                        const state = this.state.selectedState;
                                        state['Nicaragua'] = values;
                                        this.setState({ selectedState : state})
                                    }
                                }
                                >
                                    <span aria-hidden="true">×</span><span className="sr-only">Close alert</span>
                                </button>
                            </Alert>)})} 
                </div> 
            :
            null
            }

            {this.state.selectedState["Marshall Islands"]
            ? 
                <div>
                    {this.state.selectedState["Marshall Islands"].length > 0 ? <h5>Marshall Islands</h5> : null}
                    {this.state.selectedState["Marshall Islands"].map((val, idx) => {
                        return(
                        <Alert key={idx} variant={"danger"}>
                            {val}
                            <button type="button" className="close"
                             onClick={(e)=> 
                                {
                                    const values =  this.state.selectedState["Marshall Islands"];
                                    const index = values.indexOf(val);
                                    if(index > -1) {
                                        values.splice(index,1)
                                    }
                                    const state = this.state.selectedState;
                                    state["Marshall Islands"] = values;
                                    this.setState({ selectedState : state})
                                }
                            }
                            >
                                <span aria-hidden="true">×</span><span className="sr-only">Close alert</span>
                            </button>
                        </Alert>)})} 
                </div> 
            : 
            null}

        </Col>
        </Row> 
        </Container> 
    </div>
    )
}
}