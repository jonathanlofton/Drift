export const fetchFollowings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/followings',
  })
);

export const fetchFollowing = id => (
  $.ajax({
    method: 'GET',
    url: `/api/followings/${id}`,
  })
);

export const createFollowing = data => (
  $.ajax({
    method: 'POST',
    url: `/api/followings`,
    data
  })
);

export const deleteFollowing = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/followings/${id}`,
  })
);
