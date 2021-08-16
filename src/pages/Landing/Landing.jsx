import TopStreamersBar from '../../components/TopStreamersBar/TopStreamersBar'
import TopGames from '../../components/TopGames/TopGames'
import {Box, Grid, Typography, Divider } from '@material-ui/core';

const Landing = ({user}) => {
  return (
    < >
      <TopStreamersBar />
      <Box ml={35} mr={5} my={3}>
      <Typography variant={'h4'} >Top Games</Typography>
      <TopGames />
      
      </Box>

    </>
  )
}
 
export default Landing