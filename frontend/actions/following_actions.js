import * as APIUtil from '../util/following_api_util';

export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';
export const RECEIVE_FOLLOWINGS = 'RECEIVE_FOLLOWINGS';
export const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING';

export const receiveFollowings = followings => ({
  type: RECEIVE_FOLLOWINGS,
  followings,
});

export const receivePlaylistSong = playlistSong => ({
  type: RECEIVE_FOLLOWING,
  playlistSong,
});

export const fetchFollowings = () => dispatch => (
  APIUtil.fetchFollowings().then(followings => (
    dispatch(receiveFollowings(followings))),
  )
);

export const fetchFollowing = id => dispatch => (
  APIUtil.fetchFollowing(id).then(following => (
    dispatch(receiveFollowing(following))),
  )
);

export const createFollowing = (playlistId, userId) => dispatch => (
  APIUtil.createFollowing(playlistId, userId).then(following => dispatch(receiveFollowing(following)))
);

export const deleteFollowing = followingId => (
  APIUtil.deleteFollowing(followingId)
);
