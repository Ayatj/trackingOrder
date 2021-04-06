import React from "react";
import { Grid } from '@material-ui/core';
import CardObj from './CardObj';

export default class PackageCard extends React.Component {
  state = {
    loading: true,
    parcel: null,
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ parcel: data, loading: false });
  }

  render() {

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.parcel) {
      return <div>didn't get a parcel</div>; 
    } 

    return (
      <div>
        <Grid item justify="space-evenly" container xs={12}>
            {this.state.parcel.map((data, index) => (
              <div key={index}>
                <CardObj info={data}/>
              </div>
            ))}
          </Grid>
      </div>
    );
  }
}