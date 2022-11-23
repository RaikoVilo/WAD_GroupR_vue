import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: [
      {
        id: 0,
        author: "filler",
        created: "Oct 05, 2022",
        title: "Look at this cute cat!!!!",
        body: "This is my second test on creating post on my webside. This time with cute cat picture :D",
        picture: "https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg",
        likes: 0,
      },
      {
        id: 1,
        author: "filler",
        created: "Oct 05, 2022",
        title: "Quote of day 1",
        body: "“I had been told that the training procedure with cats was difficult. It’s not. Mine had me trained in two days.” – Bill Dana",
        picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-cuddling-1593203046.jpg",
        likes: 0
      },
      {
        id: 2,
        author: "filler",
        created: "Oct 05, 2022",
        title: "Quote of day 2",
        body: "“Cats are inquisitive, but hate to admit it.” – Mason Cooley",
        likes: 0
      },
      {
        id: 3,
        author: "filler",
        created: "Oct 05, 2022",
        title: "Quote of day 3",
        body: "“In ancient times cats were worshipped as gods; they have not forgotten this.” – Terry Pratchett",
        likes: 0
      },
      {
        id: 4,
        author: "filler",
        created: "Oct 05, 2022",
        title: "Quote of day 4",
        body: "“I have studied many philosophers and many cats. The wisdom of cats is infinitely superior.” – Hippolyte Taine",
        picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg",
        likes: 0
      },
      {
        id:5,
        author: "filler",
        created: "Nov 02, 2022",
        title: "Quote of day 5",
        body: "“There are two means of refuge from the miseries of life: music and cats.” – Albert Schweitzer",
        likes: 0
      },
      {
        id: 6,
        author: "filler",
        created: "Nov 02, 2022",
        title: "Quote of day 6",
        body: "“A happy arrangement: many people prefer cats to other people, and many cats prefer people to other cats.” – Mason Cooley",
        picture: "https://play-lh.googleusercontent.com/AmKSpZt_rynhOO0ID1eS0gqeW3DFzoH6KNZkAAgepQ0t9MDRQTmil-nlY5GqkZ_7El0",
        likes: 0
      },
      {
        id: 7,
        author: "filler",
        created: "Nov 02, 2022",
        title: "Quote of day 7",
        body: "“How we behave toward cats here below determines our status in heaven.” – Robert A. Heinlein",
        likes: 0
      },
      {
        id: 8,
        author: "filler",
        created: "Nov 02, 2022",
        title: "Quote of day 8",
        body: "“You can not look at a sleeping cat and feel tense.” – Jane Pauley",
        likes: 0
      },
      {
        id: 9,
        author: "filler",
        created: "Nov 02, 2022",
        title: "Quote of day 9",
        body: "“I love my cats more than I love most people. Probably more than is healthy.” – Amy Lee",
        likes: 0
      },
      {
        id: 10,
        author: "filler",
        created: "Nov 02, 2022",
        title: "Quote of day 10",
        body: "“All you need is love and a cat.” – Unknown",
        picture: "https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg",
        likes: 0
      }
    ]
  },
  getters: {
    getPosts: state => {
      var postList = state.posts.map(post => {
        return {
            id: post.id,
            created: post.created,
            author: post.author,
            title: post.title,
            body: post.body,
            picture: post.picture,
            likes: post.likes
        }
      });
      return postList
    }
  },
  mutations: {
    increaseLikes: (state, payload) => {
      state.posts[payload.id].likes += 1
    },
    resetLikes: state => {
      state.posts.forEach(post => {
        post.likes = 0
      });
    }
  },
  actions: {
    increaseLikesAct: (act, payload) => {
        act.commit("increaseLikes", payload)
    },
    resetLikesAct: act => {
        act.commit("resetLikes")
    }
  },
  modules: {
  }
})
