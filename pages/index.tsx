// import { useState } from 'react'
// import { useQuery, gql } from '@apollo/client'
// import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/router'
import Layout from 'src/components/Layout'
// import Map from 'src/components/map'
// import HouseList from 'src/components/houseList'
// import { useLastData } from 'src/utils/useLastData'
// import { useLocalState } from 'src/utils/useLocalState'
// import { HousesQuery, HousesQueryVariables } from 'src/generated/HousesQuery'

const Home: React.FC = ({ children }) => {
  return <Layout>{children}</Layout>
}
export default Home
