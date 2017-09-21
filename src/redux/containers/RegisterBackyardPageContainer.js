import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import RegisterBackyardPage from '../../components/RegisterBackyardPage';

import createListingProcess from '../thunks/createListingProcess';
import deleteListingProcess from '../thunks/deleteListingProcess';
import getOneListingProcess from '../thunks/getOneListingProcess';
import getListingsProcess from '../thunks/getListingsProcess';

function mapStateToProps(state, ownProps) {
  return {
    listingItems: [],
    hostInfo: null
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getListingsProcess()),
    addListing: hostInfo =>
      dispatch(
        createListingProcess({
          fields: {
            coordinates: hostInfo.coordinates,
            dimensions: Number(hostInfo.dimensions),
            rent: Number(hostInfo.rent),
            date: hostInfo.date,
            amenities: hostInfo.amenities
          }
        })
      ),
    onClose: () =>
      dispatch({
        type: 'CLOSE_SUCESS_MESSAGE',
        hostInfo: null
      }),
    onDelete: hostInfo => dispatch(deleteListingProcess(hostInfo)),
    onLove: hostInfo => dispatch(getOneListingProcess(hostInfo))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(IndexPage);
