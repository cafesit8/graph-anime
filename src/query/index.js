import gql from 'graphql-tag'

export const getInitialAnime = gql`
  query Page($perPage: Int) {
    Page(perPage: $perPage) {
      mediaTrends {
        media {
          id
          description
          title {
            english
            native
            userPreferred
          }
          coverImage {
            large
            medium
            extraLarge
          }
          bannerImage
        }
      }
    }
  }
`

export const getAnimeList = gql`
  query($page: Int, $perPage: Int)  {
    Page(page: $page, perPage: $perPage) {
      media (sort: START_DATE_DESC) {
        id
        title {
          english
          native
          userPreferred
        }
        description
        coverImage {
          extraLarge
          medium
          large
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        lastPage
        perPage
        total
      }
    }
  }
`

export const getAnime = gql`
  query Media($mediaId: Int) {
    Media(id: $mediaId) {
      id
        siteUrl
        title {
          english
          native
          userPreferred
        }
        description
        coverImage {
          extraLarge
          medium
          large
        }
        genres
        trailer {
          site
          thumbnail
          id
        }
        bannerImage
        season
        chapters
        popularity
        startDate {
          day
          month
          year
        }
        endDate {
          day
          month
          year
        }
    }
  }
`

export const getAnimeByGenre = gql`
  query($genre: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(genre: $genre) {
        id
        title {
          english
          native
          userPreferred
        }
        description
        bannerImage
        coverImage {
          extraLarge
          medium
          large
        }
        trailer {
          site
          thumbnail
          id
        }
      }
    }
  }
`