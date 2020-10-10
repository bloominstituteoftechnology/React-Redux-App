import React from 'react';
import { connect } from 'react-redux';
import Exhibition from './Exhibition'
import 'semantic-ui-css/semantic.min.css';

const mapStateToProps = (state) => {
    return {
      exhibitsAsProps: state.exhibits
    }
  }

const Exhibitions = (props) => {
    return (
        <div>
            {props.exhibits.map(item => (
                 <Exhibition key={item.id} exhibit={item} />
            ))}
        </div>
    )
}

export default connect(mapStateToProps, {})(Exhibitions);