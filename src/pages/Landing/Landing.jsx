import TopStreamersBar from '../../components/TopStreamersBar/TopStreamersBar'
import {Box, Grid, Typography, Divider } from '@material-ui/core';

const Landing = ({user}) => {
  return (
    < >
      <TopStreamersBar />
      <Box ml={35} mr={5} my={3}>

      <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      </Box>

    </>
  )
}
 
export default Landing