import React from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import ReviewForm from './ReviewForm'
import {Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration:'none',
    color:theme.palette.secondary.dark,
  },
}));

const ReviewCard = ({ media, userProfile, handleCreateReview})  => {}

export default ReviewCard