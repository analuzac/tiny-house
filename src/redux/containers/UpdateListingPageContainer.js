import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UpdateListingPage from '../../components/UpdateListingPage';

import updateListingProcess from '../thunks/updateListingProcess';
// import createListingProcess from '../thunks/createListingProcess';
// import deleteListingProcess from '../thunks/deleteListingProcess';
// import getOneListingProcess from '../thunks/getOneListingProcess';
// import getListingsProcess from '../thunks/getListingsProcess';

function mapStateToProps(state, ownProps) {
  //somewhere in ownProps is backyardId so don't need function onLove
  //given backyardId, LOOK UP the correct host
  return {
    listingItems: state.listingItems,
    hostInfo: state.hostInfo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    //onMount: () => dispatch(getOneListingProcess())
    // addListing: hostInfo =>
    //   dispatch(
    //     createListingProcess({
    //       fields: {
    //         coordinates: hostInfo.coordinates,
    //         dimensions: Number(hostInfo.dimensions),
    //         rent: Number(hostInfo.rent),
    //         date: hostInfo.date,
    //         amenities: hostInfo.amenities
    //       }
    //     })
    //   ),
    // onClose: () =>
    //   dispatch({
    //     type: 'CLOSE_SUCESS_MESSAGE',
    //     hostInfo: null
    //   }),
    // onDelete: hostInfo => dispatch(deleteListingProcess(hostInfo)),
    // onLove: hostInfo => dispatch(getOneListingProcess(hostInfo)),
    onUpdate: hostInfo => dispatch(updateListingProcess(hostInfo))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

export default compose(connectToStore)(UpdateListingPage);
