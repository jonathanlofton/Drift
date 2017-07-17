{
  currentUser: {
    id: 1,
    username: "jonathanLofton"
  },
  artists: {
    byId: {
      1: {
        id: 1,
        name: 'Travis Scott',
        albums: [one, two, three],
      }
    }
    allIds: ["1"]
  },
  albums: {
    byId: {
      1: {
        id: 1,
        name: 'Birds in the trap',
        songs: [one, two, three]
      }
    }
    allIds: ["1"]
  },
  songs: {
    byId: {
      1: {
        id: 1,
        name: 'GooseBumps'
        artist: "Travis Scott"
      },
      2: {
        id: 2,
        name: 'beibs in the trap'
        artist: "Travis Scott"
      }
    }
    allIds: ["1"]
  }
  playlists: {
    byId: {
      1: {
        id: 1,
        name: 'San Francisco',
        songs: ["GooseBumps", "beibs in the trap"]
      }
    }
  }
}
