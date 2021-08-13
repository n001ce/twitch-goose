import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton, FormControl, InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
// import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        margin: '10px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
    select: {
        color:"white",
        borderColor:'0',
        textDecoration:'none',
        '&:before': {
            borderColor: "white",
        },
        '&:after': {
            borderColor: "white",
        }
    },
     
 
}));

export default function SearchBar({ user, handleLogout, history, state, handleChange }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
return(
    <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              inputProps={{ 'aria-label': 'search' }}
              type="text"
              name="query"
              value={state.formData.query}
              onChange={handleChange}
              required
                />
        {/* <FormControl className={classes.formControl}> */}
        <NativeSelect
          defaultValue="movie"
          className={classes.select}
          inputProps={{
              id: 'movieChoice',
            }}
            name= 'type'
            onChange={handleChange}
        >
          <option value="movie" >Movie</option>
          <option value="tv">TV</option>
        </NativeSelect>

          <IconButton type="submit"
        disabled={state.invalidForm}>
          <SearchIcon className="searchIcon"/>
          </IconButton>

          </div>
)

}