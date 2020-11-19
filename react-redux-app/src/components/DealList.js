// Import Dependencies
import React from "react";
import { connect } from "react-redux";

// Import Components
import DealBox from "./DealBox";

function DealList(props) {
  return (
    <div>
      {props.isLoading && <div>Loading Data</div>}

      {props.deals.length > 0 &&
        props.deals.map((deal) => {
          return <DealBox deal={deal} key={deal.dealID} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    deals: state.deals,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(DealList);
