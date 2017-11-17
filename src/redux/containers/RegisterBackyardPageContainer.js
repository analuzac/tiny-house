import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import RegisterBackyardPage from '../../components/RegisterBackyardPage';

import createListingProcess from '../thunks/createListingProcess';
import deleteListingProcess from '../thunks/deleteListingProcess';
import getListingsProcess from '../thunks/getListingsProcess';

function mapStateToProps(state, ownProps) {
  return {
    listingItems: state.listingItems,
    hostInfo: state.hostInfo,
    userInfo: state.userInfo,
    errorMsg: state.errorMsg
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getListingsProcess()),
    addListing: hostInfo =>
      dispatch(
        createListingProcess(
          {
            location: hostInfo.location,
            dimensions: hostInfo.dimensions,
            rent: hostInfo.rent,
            date: hostInfo.date,
            amenities: hostInfo.amenities
          },
          ownProps.history
        )
      ),
    onClose: () =>
      dispatch({
        type: 'CLOSE_SUCESS_MESSAGE',
        hostInfo: null
      }),
    onDelete: hostInfo =>
      dispatch(deleteListingProcess(hostInfo, ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(RegisterBackyardPage);
